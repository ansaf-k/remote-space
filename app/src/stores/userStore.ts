// src/stores/userStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { directus, readUser } from '../services/directus';
import { useRoute } from 'vue-router';

export interface User {
    id: string;
    email: string;
    first_name?: string;
    last_name?: string;
    role?: string;
    avatar?: string;
    status?: 'active' | 'inactive' | 'pending';
    last_access: Date;
}

export const useUserStore = defineStore('user', () => {
    const profileUser = ref<User | null>(null); // Store selected user's profile
    const route = useRoute();

    // Fetch another user by ID
    async function fetchUserById() {
        const userId = route.params.id;
        try {
            const response = await directus.request(readUser(userId as string));
            console.log(response);
            profileUser.value = response as User;
            console.log(profileUser.value);
            return profileUser.value
        } catch (err) {
            console.error('Error fetching user by ID:', err);
        }
    }

    return {
        profileUser,
        fetchUserById
    };
});
