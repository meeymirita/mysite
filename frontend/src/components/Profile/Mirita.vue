<script setup lang="ts">
import {computed, onMounted} from "vue";
import {useUserStore} from "@/stores/profile.store.ts";

const userStore = useUserStore();

onMounted( async () => {
  await userStore.fetchUser();
})

const parseStringProfession = computed(() => {
  const profession = userStore.user?.profession;
  if (!profession) return '';

  const words = profession.split(' ');
  const startRow = words.slice(0, 3).join(' ');
  const newValue = words[3];

  const lastElement =
      `<a style="color:#ff4fa0" href="https://kontur-lite.ru/">${newValue}</a>`;

  return `${startRow} ${lastElement}`;
})
</script>

<template>
  <div v-if="userStore.user">
    <h1 class="mt-3">{{userStore.user.fullName}} <span>/ {{userStore.user.userName}}</span></h1>
    <p class="subtitle">
      <a v-html="parseStringProfession"></a> • {{userStore.user.experience}}
    </p>
    <div class="info-list mb-4">
      <div class="info-box">
        <span>Возраст</span>
        <strong>{{userStore.user.age}}</strong>
      </div>
      <div class="info-box">
        <span>Город</span>
        <strong>{{userStore.user.city}}</strong>
      </div>
      <div class="info-box">
        <span>Stack</span>
        <strong>{{userStore.user.stack}}</strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subtitle {
  color: #6b4b5d;
  font-size: 18px;
  margin-bottom: 25px;
}

.info-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.info-box {
  background: rgba(255,255,255,0.55);

  border: 1px solid rgba(255,255,255,0.7);

  padding: 15px 20px;

  border-radius: 18px;

  min-width: 130px;

  backdrop-filter: blur(10px);

  box-shadow:
      0 4px 15px rgba(255, 182, 220, 0.15);
}
.info-box span {
  display: block;

  font-size: 12px;

  color: #8a6b79;

  margin-bottom: 5px;
}

.info-box strong {
  font-size: 15px;
  color: #ff4fa0;
}
@media(max-width: 768px) {
  h1 {
    font-size: 38px;
  }
  .info-list {
    gap: 10px;
  }
  .info-box {
    width: 100%;
  }
}
</style>