<script setup lang="ts">
import SideBar from "@/pages/Admin/SideBar.vue";
</script>

<template>
  <div class="container wrapper p-0">
    <div class="row g-0 min-vh-100">
      <SideBar />
      <main class="col-9 p-5 align-items-center justify-content-center">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>