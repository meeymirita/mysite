<script setup lang="ts">
import {onMounted} from "vue";
import {useSocialsStore} from "@/stores/socials.store.ts";
const socialStore = useSocialsStore();
onMounted(async () => {
  await socialStore.fetchSocials()
})
</script>

<template>
  <div class="socials mt-4">
    <a v-for="social in socialStore.socials" :social-id="social.id" :href="social.link" target="_blank" class="social-btn">
      <i :class="social.icons"></i>
      {{social.name}}
    </a>
  </div>
</template>

<style scoped>

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 12px 18px;

  border-radius: 16px;

  text-decoration: none;

  font-weight: 600;
  font-size: 14px;

  color: #ff4fa0;

  background:
      linear-gradient(
          135deg,
          rgba(255,255,255,0.95),
          rgba(255,230,242,0.95)
      );

  border: 1px solid rgba(255,255,255,0.9);

  box-shadow:
      0 4px 15px rgba(255, 182, 220, 0.15);

  transition: 0.3s ease;
}

.social-btn i {
  font-size: 18px;

  background: linear-gradient(135deg, #ff8fc7, #ff4fa0);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.social-btn:hover {
  transform: translateY(-4px);

  color: white;

  background:
      linear-gradient(
          135deg,
          #ff8fc7,
          #ff4fa0
      );

  box-shadow:
      0 10px 25px rgba(255, 105, 180, 0.25);
}

.social-btn:hover i {
  -webkit-text-fill-color: white;
}
</style>