import { defineStore } from 'pinia';
import { directus, readMe } from '../services/directus';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  avatar?: string;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(localStorage.getItem('directus_token'));
  const loading = ref(false);
  const error = ref<string | null>(null);
  const router = useRouter();


  const isAuthenticated = computed(() => !!token.value);

  // Login 
  async function login(credentials: { email: string; password: string }): Promise<boolean> {
    loading.value = true;
    error.value = null;

    try {
      const response = await directus.login(credentials.email, credentials.password);

      if (response?.access_token) {
        token.value = response.access_token;
        localStorage.setItem('directus_token', token.value);
        await fetchCurrentUser();
        return true;
      }

      throw new Error('No access token received');
    } catch (err) {
      console.error('Login failed:', err);
      error.value = err instanceof Error ? err.message : 'Authentication failed';
      return false;
    } finally {
      loading.value = false;
    }
  }

  // Fetch user
  async function fetchCurrentUser() {
    if (!token.value) return;

    try {
      const me = await directus.request(readMe());

      if (me && typeof me === 'object' && 'email' in me) {
        user.value = me as User;
      } else {
        throw new Error('Invalid user data received');
      }
    } catch (err) {
      console.error('Error fetching current user:', err);
      await logout();
    }
  }

  // Logout
  async function logout() {
    try {
      await directus.logout();
      user.value = null;
      token.value = null;
      localStorage.removeItem('directus_token');
      return true;
    } catch (err) {
      console.error('Logout error:', err);
      return false;
    } finally {
      localStorage.removeItem('directus_token');
      void router.push('/login');
    };
  }

  // Auto-load user session on startup
  async function init(): Promise<void> {
    if (token.value) {
      try {
        await fetchCurrentUser();
        console.log("refetched");
      } catch (err) {
        console.log('Session not found or invalid:', err);
        await logout();
      }
    }
  }


  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
    init,
  };
});
