<script setup lang="ts">
import { ref } from 'vue';

// Define interfaces for user data and achievements
interface Achievement {
    id: number;
    title: string;
    description: string;
    date: string;
    icon: string;
    color: string;
}

interface TeamMember {
    id: number;
    name: string;
    role: string;
    avatar: string;
}

interface UserProfile {
    id: number;
    name: string;
    email: string;
    avatar: string;
    status: 'active' | 'inactive' | 'pending';
    role: string;
    department: string;
    joinDate: string;
    lastActive: string;
    achievements: Achievement[];
    team: TeamMember[];
    workHours: {
        total: number;
        thisWeek: number;
    };
    performanceScore: number;
}

// Reactive state for user profile with demo details
const userProfile = ref<UserProfile>({
    id: 1234,
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@remospace.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    status: 'active',
    role: 'Senior Product Manager',
    department: 'Product Innovation',
    joinDate: 'March 15, 2023',
    lastActive: '2 hours ago',
    achievements: [
        {
            id: 1,
            title: 'Product Innovation',
            description: 'Led 3 breakthrough product initiatives',
            date: '2023-09-15',
            icon: 'lightbulb',
            color: 'purple'
        },
        {
            id: 2,
            title: 'Team Collaboration',
            description: 'Highest cross-team collaboration score',
            date: '2023-11-20',
            icon: 'group',
            color: 'blue'
        },
        {
            id: 3,
            title: 'Performance Excellence',
            description: 'Exceeded quarterly targets',
            date: '2024-01-10',
            icon: 'stars',
            color: 'green'
        }
    ],
    team: [
        {
            id: 1,
            name: 'Emma Thompson',
            role: 'Product Designer',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            id: 2,
            name: 'David Kim',
            role: 'Senior Developer',
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg'
        },
        {
            id: 3,
            name: 'Sarah Martinez',
            role: 'UX Researcher',
            avatar: 'https://randomuser.me/api/portraits/women/67.jpg'
        }
    ],
    workHours: {
        total: 782,
        thisWeek: 36
    },
    performanceScore: 92
});

// Status color mapping
const getStatusColor = (status: string) => {
    switch (status) {
        case 'active': return 'positive';
        case 'inactive': return 'negative';
        case 'pending': return 'warning';
        default: return 'grey';
    }
};
</script>

<template>
    <q-layout>
        <q-page-container>
            <q-page class="full-width-profile bg-soft-white">
                <div class="profile-container">
                    <!-- Profile Header -->
                    <div class="profile-header">
                        <div class="avatar-section">
                            <q-avatar size="120px" class="profile-avatar">
                                <img :src="userProfile.avatar" alt="User Avatar">
                            </q-avatar>
                            <q-badge :color="getStatusColor(userProfile.status)" rounded class="status-badge">
                                {{ userProfile.status }}
                            </q-badge>
                        </div>
                        <div class="profile-info">
                            <h4 class="q-mb-xs">{{ userProfile.name }}</h4>
                            <div class="text-subtitle1 text-grey">
                                {{ userProfile.role }} | {{ userProfile.department }}
                            </div>
                            <div class="q-mt-sm">
                                <q-chip icon="event" color="primary" text-color="white">
                                    Joined: {{ userProfile.joinDate }}
                                </q-chip>
                                <q-chip icon="access_time" color="secondary" text-color="white">
                                    Last Active: {{ userProfile.lastActive }}
                                </q-chip>
                            </div>
                        </div>
                    </div>

                    <!-- Performance and Stats Section -->
                    <div class="profile-stats q-mt-lg">
                        <div class="row q-col-gutter-md">
                            <div class="col-md-4 col-sm-12">
                                <q-card class="stat-card">
                                    <q-card-section>
                                        <div class="text-h6">Work Hours</div>
                                        <div class="text-subtitle2 text-grey">
                                            Total: {{ userProfile.workHours.total }}
                                            <br>
                                            This Week: {{ userProfile.workHours.thisWeek }}
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <q-card class="stat-card">
                                    <q-card-section>
                                        <div class="text-h6">Performance</div>
                                        <q-linear-progress :value="userProfile.performanceScore / 100" color="primary"
                                            class="q-mt-sm" />
                                        <div class="text-subtitle2 text-grey">
                                            Score: {{ userProfile.performanceScore }}%
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <q-card class="stat-card">
                                    <q-card-section>
                                        <div class="text-h6">Email</div>
                                        <div class="text-subtitle2 text-grey">
                                            {{ userProfile.email }}
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </div>

                    <!-- Achievements Section (GitHub-like) -->
                    <div class="achievements-section q-mt-lg">
                        <h5 class="q-mb-md">Achievements</h5>
                        <div class="row q-col-gutter-md">
                            <div v-for="achievement in userProfile.achievements" :key="achievement.id"
                                class="col-md-4 col-sm-12">
                                <q-card class="achievement-card">
                                    <q-card-section horizontal>
                                        <q-card-section class="col-3 flex flex-center">
                                            <q-icon :name="achievement.icon" :color="achievement.color" size="lg" />
                                        </q-card-section>
                                        <q-card-section class="col-9">
                                            <div class="text-h6">{{ achievement.title }}</div>
                                            <div class="text-subtitle2 text-grey">
                                                {{ achievement.description }}
                                            </div>
                                            <div class="text-caption text-grey q-mt-xs">
                                                Earned on: {{ achievement.date }}
                                            </div>
                                        </q-card-section>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </div>

                    <!-- Team Section -->
                    <div class="team-section q-mt-lg">
                        <h5 class="q-mb-md">Current Team</h5>
                        <div class="row q-col-gutter-md">
                            <div v-for="member in userProfile.team" :key="member.id" class="col-md-4 col-sm-12">
                                <q-card class="team-member-card">
                                    <q-card-section horizontal>
                                        <q-card-section class="col-4 flex flex-center">
                                            <q-avatar>
                                                <img :src="member.avatar" :alt="member.name">
                                            </q-avatar>
                                        </q-card-section>
                                        <q-card-section class="col-8">
                                            <div class="text-h6">{{ member.name }}</div>
                                            <div class="text-subtitle2 text-grey">
                                                {{ member.role }}
                                            </div>
                                        </q-card-section>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<style scoped>
.full-width-profile {
    width: 100%;
    margin: 0;
    padding: 0;
}

.profile-container {
    width: 100%;
    background: white;
    padding: 2rem;
}

.profile-header {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.avatar-section {
    position: relative;
}

.status-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    text-transform: capitalize;
}

.profile-avatar {
    border: 3px solid var(--q-primary);
}

.stat-card,
.achievement-card,
.team-member-card {
    height: 100%;
    transition: transform 0.3s ease;
}

.stat-card:hover,
.achievement-card:hover,
.team-member-card:hover {
    transform: scale(1.05);
}

.bg-soft-white {
    background-color: #F8FAFC;
}

@media (max-width: 768px) {
    .profile-header {
        flex-direction: column;
        text-align: center;
    }
}
</style>