<script setup lang="ts">
import {useAboutStore} from "@/stores/about.store.ts";
import {onMounted} from "vue";

const aboutStore = useAboutStore();
onMounted(async () => { await aboutStore.fetchAbout()})
</script>

<template>
  <div class="ui-card p-4 mb-4" v-for="about in aboutStore.about">
    <h2 class="section-title">{{about.title}}</h2>
    <p class="muted mb-0">
      {{about.desc}}
    </p>
  </div>
</template>
<style scoped>
h1 {
  font-size: 52px;
  font-weight: 700;
  margin-bottom: 10px;

  color: #ff4fa0;
}

h1 span {
  color: #ff84c1;
}

.section-title {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 700;

  color: #ff4fa0;
}

.muted {
  color: #5e5e5e;
  line-height: 1.8;
}

</style>