<script setup lang="ts">
import {onMounted} from "vue";
import {useTechStore} from "@/stores/tech.store.ts";

const technologies = useTechStore();

onMounted(async () => {
  console.log(technologies.fetchTech())
})
</script>

<template>
  <div class="tech-list">
       <span class="badge-ui" v-for="tech in technologies.tech">
           <i :class="tech.icons"></i>
           {{tech.technology}}
       </span>
  </div>
</template>

<style scoped>
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.badge-ui {
  background:
      linear-gradient(
          135deg,
          rgba(255,255,255,0.9),
          rgba(255, 225, 240, 0.9)
      );

  border: 1px solid rgba(255,255,255,0.8);

  color: #ff4fa0;

  padding: 9px 15px;

  border-radius: 14px;

  font-size: 13px;

  font-weight: 600;

  transition: 0.25s ease;

  box-shadow:
      0 4px 12px rgba(255, 182, 220, 0.12);
}

.badge-ui i {
  margin-right: 8px;
  font-size: 14px;

  background: linear-gradient(135deg, #ff8fc7, #ff4fa0);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.badge-ui:hover i {
  background: linear-gradient(135deg, #ffffff, #ffffff);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.badge-ui:hover {
  transform: translateY(-3px);

  background:
      linear-gradient(
          135deg,
          #ff8fc7,
          #ff5da8
      );

  color: white;

  box-shadow:
      0 8px 20px rgba(255, 105, 180, 0.3);
}
</style>