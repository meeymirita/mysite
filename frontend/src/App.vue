<script setup lang="ts">
import Profile from "@/components/Profile/Profile.vue";
import About from "@/components/About/About.vue";
import Projects from "@/components/Projects/Projects.vue";
import Sakura from "@/components/Sakura/Sakura.vue";
</script>

<template>
  <div class="container py-5">
    <!-- PROFILE -->
    <Profile/>
    <!-- ABOUT -->
    <About/>
    <!-- PROJECTS -->
   <Projects/>
  </div>
  <Sakura/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
body {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;

  background:
      radial-gradient(circle at top left, rgba(255, 182, 220, 0.9), transparent 30%),
      radial-gradient(circle at bottom right, rgba(255, 105, 180, 0.35), transparent 35%),
      linear-gradient(135deg, #fff5fb 0%, #ffe4f3 45%, #ffd6ec 100%);

  color: #2b2b2b;
}
</style>
