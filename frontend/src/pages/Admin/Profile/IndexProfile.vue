```vue id="p4x8m2"
<script setup lang="ts">
import {onMounted} from "vue";
import {useUserStore} from "@/stores/profile.store.ts";

const store = useUserStore();

onMounted(() => {
  store.fetchUser()
})
</script>

<template>
  <div v-if="store.user" class="profile-card glass d-flex position-relative p-4 gap-4">
    <div class="avatar d-flex align-items-center justify-content-center flex-shrink-0">
      {{ store.user.fullName?.charAt(0).toUpperCase() }}
    </div>
    <div class="w-100">
      <div class="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h2 class="username mb-1">
            {{ store.user.fullName }}
          </h2>
          <p class="fullname mb-0">
            {{ store.user.userName }}
          </p>
        </div>
        <span class="age-badge">
          {{ store.user.age }} y.o
        </span>
      </div>
      <div class="info-group">
        <div class="info-item">
          {{ store.user.profession }}
        </div>
        <div class="info-item">
          {{ store.user.experience }}
        </div>
        <div class="info-item">
          {{ store.user.city }}
        </div>
        <div class="info-item">
          {{ store.user.stack }}
        </div>
      </div>
      <div class="mt-4">
        <small class="created-text">
          Created:
          {{ new Date(store.user.createdAt).toLocaleDateString() }}
        </small>
      </div>
      <a
          href="#"
          class="stretched-link"
      ></a>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: linear-gradient(135deg, rgb(255 0 108 / 95%), rgb(0 0 0 / 90%));
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 15px 40px rgba(255, 105, 180, 0.35);
  border-radius: 30px;
}

.profile-card {
  color: white;
  overflow: hidden;
  transition: 0.3s;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(255, 105, 180, 0.45);
}

.avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  font-size: 42px;
  font-weight: 800;
  color: #ff4da6;
  background: white;
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
}

.username {
  font-size: 34px;
  font-weight: 800;
  color: white;
}

.fullname {
  color: rgba(255, 255, 255, 0.8);
  font-size: 17px;
}

.info-group {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 20px;
}

.info-item {
  padding: 12px 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.age-badge {
  padding: 10px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 700;
}

.created-text {
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 1px;
}

</style>

