<script setup lang="ts">

</script>

<template>
  <div class="tech-list">
                            <span class="badge-ui">
                                <i class="fa-brands fa-laravel"></i>
                                Laravel
                            </span>
    <span class="badge-ui">
                                <i class="fa-solid fa-database"></i>
                                Redis
                            </span>
    <span class="badge-ui">
                                <i class="fa-solid fa-box"></i>
                                RabbitMQ
                            </span>
    <span class="badge-ui">
                                <i class="fa-brands fa-docker"></i>
                                Docker
                            </span>
    <span class="badge-ui">
                                <i class="fa-brands fa-vuejs"></i>
                                Vue.js
                            </span>
    <span class="badge-ui">
                                <i class="fa-solid fa-code"></i>
                                TypeScript
                            </span>
    <span class="badge-ui">
                                <i class="fa-brands fa-js"></i>
                                JavaScript
                            </span>
    <span class="badge-ui">
                                <i class="fa-solid fa-check"></i>
                                ESLint
                            </span>
    <span class="badge-ui">
                                <i class="fa-brands fa-npm"></i>
                                NPM
                            </span>
    <span class="badge-ui">
                                <i class="fa-brands fa-yarn"></i>
                                Yarn
                            </span>
    <span class="badge-ui">
                                <i class="fa-brands fa-figma"></i>
                                Figma
                            </span>
    <span class="badge-ui">
                                <i class="fa-brands fa-node-js"></i>
                                Node.js
                            </span>
    <span class="badge-ui">
                                <i class="fa-solid fa-code"></i>
                                PHPStorm
                            </span>
    <span class="badge-ui">
                                <i class="fa-brands fa-php"></i>
                                PHP
                            </span>
    <span class="badge-ui">
                                <i class="fa-brands fa-linux"></i>
                                Linux
                            </span>
    <span class="badge-ui">
                                <i class="fa-solid fa-server"></i>
                                Nginx
                            </span>
    <span class="badge-ui">
                                <i class="fa-solid fa-code-branch"></i>
                                CI/CD
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