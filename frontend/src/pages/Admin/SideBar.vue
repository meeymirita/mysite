<script setup lang="ts">
import { useRoute } from "vue-router";
import TechList from "@/components/Profile/TechList.vue";
const route = useRoute();
</script>
<template>
  <aside class="col-3 p-4">
    <div class="sidebar">
      <div class="mb-5">
        <h2 class="logo">
          Mirita
        </h2>
        <p class="small-text">
          admin dashboard
        </p>
      </div>
      <ul class="nav flex-column gap-3">
        <li class="nav-item">
          <RouterLink
              to="/admin/about"
              class="nav-link custom-link"
              :class="{ activeLink: route.path === '/admin/about' }"
          >
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink
              to="/admin/profile"
              class="nav-link custom-link"
              :class="{ activeLink: route.path === '/admin/profile' }"
          >
            Profile
          </RouterLink>
        </li>
        <li>
          <RouterLink
              to="/admin/projects"
              class="nav-link custom-link"
              :class="{ activeLink: route.path === '/admin/projects' }"
          >
            Projects
          </RouterLink>
        </li>
        <li>
          <RouterLink
              to="/admin/tech"
              class="nav-link custom-link"
              :class="{ activeLink: route.path === '/admin/tech' }"
          >
            TechList
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>

.sidebar {
  min-height: calc(100vh - 32px);
  padding: 35px;
  border-radius: 30px;
  background:
      linear-gradient(
          135deg,
          rgb(255 0 108 / 95%),
          rgb(0 0 0 / 90%)
      );
  box-shadow:
      0 20px 45px rgba(255, 0, 108, 0.35);
  border:
      1px solid rgba(255,255,255,0.08);
}
.logo {
  color: white;
  font-size: 42px;
  font-weight: 800;
  letter-spacing: 2px;
}
.small-text {
  color: rgba(255,255,255,0.65);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 12px;
}
.custom-link {
  padding: 16px 20px;
  border-radius: 18px;
  color: rgba(255,255,255,0.85);
  font-size: 17px;
  font-weight: 600;
  transition: 0.3s;
  background: rgba(255,255,255,0.05);
  border:
      1px solid rgba(255,255,255,0.05);
}
.custom-link:hover {
  color: white;
  background: rgba(255,255,255,0.12);
  transform: translateX(5px);
}
.activeLink {
  background: rgba(255,255,255,0.15);
  color: white !important;
  box-shadow:
      0 10px 25px rgba(255,255,255,0.08);
  border:
      1px solid rgba(255,255,255,0.12);
}
</style>
