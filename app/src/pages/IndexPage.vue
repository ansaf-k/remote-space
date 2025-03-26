<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    Remo<span class="text-secondary">Space</span>
                </q-toolbar-title>
                <q-btn to="/login" flat color="white">
                    login
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <q-page class="bg-soft-white">
                <!-- Hero Section -->
                <section class="hero-section bg-primary text-white q-pa-xl text-center">
                    <div class="text-h3 q-mb-md">
                        RemoSpace: Your Integrated Workspace
                    </div>
                    <div class="text-subtitle1 q-mb-lg">
                        Transforming Employee Experience Through Technology
                    </div>
                    <q-btn to="/login" color="secondary" label="Explore Features" size="lg" class="q-px-xl" />
                </section>

                <!-- Key Features Overview -->
                <section class="q-pa-xl">
                    <div class="text-h4 text-primary text-center q-mb-xl">
                        Platform Features
                    </div>
                    <div class="row q-col-gutter-lg">
                        <div v-for="feature in keyFeatures" :key="feature.title" class="col-12 col-md-4">
                            <q-card flat bordered class="full-height">
                                <q-card-section>
                                    <div class="row items-center q-mb-md">
                                        <q-icon :name="feature.icon" :color="feature.iconColor" size="48px"
                                            class="q-mr-md" />
                                        <div class="text-h6 text-primary">
                                            {{ feature.title }}
                                        </div>
                                    </div>
                                    <p class="text-body1">
                                        {{ feature.description }}
                                    </p>
                                </q-card-section>
                            </q-card>
                        </div>
                    </div>
                </section>

                <!-- Gamification & Rewards -->
                <section class="bg-secondary text-white q-pa-xl">
                    <div class="row items-center">
                        <div class="col-12 col-md-6">
                            <div class="text-h4 q-mb-md">
                                Gamification & Recognition
                            </div>
                            <p class="text-body1 q-mb-lg">
                                Transform work into an engaging experience with our innovative rewards system.
                                Earn badges, track achievements, and get recognized for your contributions.
                            </p>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="row q-col-gutter-md">
                                <div v-for="badge in badges" :key="badge.name" class="col-6">
                                    <q-card flat class="text-center">
                                        <q-card-section>
                                            <q-icon :name="badge.icon" :color="badge.color" size="64px" />
                                            <div class="text-subtitle1 q-mt-md">
                                                {{ badge.name }}
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </q-page>
        </q-page-container>

        <q-footer elevated class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    © 2024 RemoSpace. All Rights Reserved.
                </q-toolbar-title>
                <div>
                    <q-btn flat label="Privacy Policy" class="q-mr-md" />
                    <q-btn flat label="Terms of Service" />
                </div>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script setup lang="ts">


const keyFeatures = [
    {
        title: 'Daily Workflow Tracking',
        icon: 'track_changes',
        iconColor: 'secondary',
        description: 'Seamlessly manage attendance, work location, and daily mood with our intuitive interface.'
    },
    {
        title: 'Project Visibility',
        icon: 'visibility',
        iconColor: 'primary',
        description: 'Get real-time insights into project progress, team dynamics, and individual contributions.'
    },
    {
        title: 'Learning & Development',
        icon: 'school',
        iconColor: 'green',
        description: 'Continuous growth through personalized learning paths and skill tracking.'
    }
]

const badges = [
    {
        name: 'Perfect Attendance',
        icon: 'stars',
        color: 'secondary'
    },
    {
        name: 'Team Player',
        icon: 'groups',
        color: 'primary'
    },
    {
        name: 'Innovation Champion',
        icon: 'lightbulb',
        color: 'green'
    },
    {
        name: 'Performance Excellence',
        icon: 'military_tech',
        color: 'secondary'
    }
]



</script>

<style lang="scss" scoped>
:root {
    --q-primary: #1E3A8A;
    --q-secondary: #F59E0B;
    --q-background: #F8FAFC;
}

.bg-soft-white {
    background-color: #F8FAFC;
}

.hero-section {
    background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%);
}

.full-height {
    height: 100%;
}

blockquote {
    font-style: italic;
    position: relative;
    quotes: "" " " "" "'" "'";
}
</style>