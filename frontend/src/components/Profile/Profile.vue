<script setup lang="ts">

import StatusBadge from "@/components/Profile/StatusBadge.vue";
import Mirita from "@/components/Profile/Mirita.vue";
import Subtitle from "@/components/Profile/Subtitle.vue";
import InfoList from "@/components/Profile/InfoList.vue";
import TechList from "@/components/Profile/TechList.vue";
import Socials from "@/components/Profile/Socials.vue";
import AnimeNyasha from "@/components/Profile/AnimeNyasha.vue";
</script>

<template>
  <div class="profile-card mb-4">
    <div class="profile-overlay"></div>
    <div class="profile-content w-100">
      <div class="row align-items-center g-4">
        <div class="col-lg-3 text-center text-lg-start">
          <AnimeNyasha/>
        </div>
        <div class="col-lg-9">
          <StatusBadge/>
          <Mirita/>
          <Subtitle/>
          <InfoList/>
          <TechList/>
          <Socials/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.profile-card {
  position: relative;
  overflow: hidden;

  border-radius: 32px;

  background:
      url('/public/sakura.jpg') center/cover;

  min-height: 340px;

  border: 1px solid rgba(255,255,255,0.6);

  box-shadow:
      0 10px 40px rgba(255, 105, 180, 0.15),
      0 0 0 1px rgba(255,255,255,0.3);
}

.profile-overlay {
  position: absolute;
  inset: 0;

  background:
      linear-gradient(to right,
      rgba(255,255,255,0.92),
      rgba(255,255,255,0.55)),

      linear-gradient(to top,
      rgba(255, 105, 180, 0.12),
      transparent);
}

.profile-content {
  position: relative;
  z-index: 2;
  padding: 40px;
}

@media(max-width: 768px) {

  .profile-content {
    padding: 25px;
  }

  h1 {
    font-size: 38px;
  }
  .profile-card {
    min-height: auto;
  }
}
</style>