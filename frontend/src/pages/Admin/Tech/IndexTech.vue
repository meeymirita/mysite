<script setup lang="ts">
import {useTechStore} from "@/stores/tech.store.ts";
import {onMounted} from "vue";
import {useToastification} from "@/stores/toast.store.ts";

const store = useTechStore();
onMounted(() => {store.fetchTech()})
const update = async (id: number, status: boolean) => {
  const {data} = await store.updateSkillsList(id, status);
  if (data.status) {
    useToastification().success('Включено');
  } else {
    useToastification().error('Выключено');
  }
}
</script>

<template>
  <div class="tech-grid">

    <div
        v-for="item in store.tech"
        :key="item.id"
        class="tech-card glass"
    >
      <div class="tech-left">
        <i :class="item.icons"></i>
        <span>{{ item.technology }}</span>
      </div>
      <div class="tech-actions">
        <label class="switch">
          <input type="checkbox" v-model="item.status" @change="update(item.id, item.status)">
          <span> {{item.status ? 'Активно' : 'Не Активно'}}</span>
        </label>
        <button class="btn-glass danger">Удалить</button>
        <button class="btn-glass">Редактировать</button>
        <div v-if="item.status">
          <img src="/active.jpg" style="width: 40px"/>
        </div>
        <div v-else>
          <img src="/noactive.jpg" style="width: 40px"/>
        </div>
      </div>
    </div>

  </div>
</template>
<!--    @click="store.addTech()"-->
<!--    @click="store.addTech()"-->
<style scoped>
.tech-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.tech-card {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 18px;

  border-radius: 18px;

  transition: 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 50px rgba(255, 105, 180, 0.45);
}

.tech-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tech-left i {
  font-size: 18px;
}

.tech-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-glass {
  padding: 6px 12px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;

  font-size: 12px;
  font-weight: 600;

  color: white;

  background: rgba(255, 255, 255, 0.08);

  cursor: pointer;

  transition: 0.2s ease;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}

.btn-glass.danger {
  background: rgba(255, 0, 80, 0.25);
}

.switch {
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 12px;
  color: white;
}

.switch input {
  accent-color: #ff4fa0;
}

.glass {
  background: linear-gradient(135deg, rgb(255 0 108 / 95%), rgb(0 0 0 / 90%));
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 15px 40px rgba(255, 105, 180, 0.35);
  color: white;
}
</style>