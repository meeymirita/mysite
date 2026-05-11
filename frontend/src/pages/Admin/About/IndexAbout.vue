<script setup lang="ts">
import { onMounted } from "vue";
import { useAboutStore } from "@/stores/about.store.ts";
const store = useAboutStore();
onMounted(() => {store.fetchAbout()})
</script>

<template>
  <div class="table-wrapper">
    <table class="table align-middle custom-table mb-0">
      <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-if="store.about"
          v-for="about in store.about"
          :key="about.id"
      >
        <th scope="row">
          {{ about.id }}
        </th>
        <td>
          {{ about.title }}
        </td>
        <td style="white-space: pre-line">
          {{ about.desc }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  overflow: hidden;
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
  padding: 10px;
}
.custom-table {
  margin: 0;
  color: white;
  --bs-table-bg: transparent;
  --bs-table-hover-bg: rgba(255,255,255,0.08);
  --bs-table-hover-color: white;
  border-collapse: separate;
}
thead {
  background: rgba(255,255,255,0.08);
}
th,
td {
  padding: 20px !important;
  border-color: rgba(255,255,255,0.08);
  color: white;
  vertical-align: middle;
}
thead th {
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.75);
  font-weight: 700;
}
tbody tr {
  transition: 0.3s;
}
tbody tr:hover {
  transform: scale(1.01);
}
</style>
