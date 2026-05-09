<script setup lang="ts">

</script>

<template>
  <div class="row g-4">
    <div class="col-md-6">
      <div class="ui-card p-4 h-100">
        <div class="project-top">
          <h3>Portfolio</h3>
          <span class="project-type">personal</span>
        </div>
        <p class="muted">
          Личный сайт с красивым UI, адаптивностью и минималистичным дизайном.
        </p>
        <div class="tech-list mt-3">
          <span class="badge-ui">Bootstrap</span>
          <span class="badge-ui">PHP</span>
          <span class="badge-ui">UI</span>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="ui-card p-4 h-100">
        <div class="project-top">
          <h3>Docker App</h3>
          <span class="project-type">backend</span>
        </div>
        <p class="muted">
          PHP + PostgreSQL приложение в Docker с nginx и CI/CD.
        </p>
        <div class="tech-list mt-3">
          <span class="badge-ui">Docker</span>
          <span class="badge-ui">Nginx</span>
          <span class="badge-ui">CI/CD</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;
}

.project-top h3 {
  margin: 0;

  font-size: 22px;

  color: #ff4fa0;
}

.project-type {
  color: #ff84c1;

  font-size: 12px;

  text-transform: uppercase;

  font-weight: 600;
}

.ui-card {
  background: rgba(255,255,255,0.55);

  border: 1px solid rgba(255,255,255,0.75);

  border-radius: 28px;

  padding: 30px;

  backdrop-filter: blur(12px);

  transition: 0.35s ease;

  box-shadow:
      0 8px 25px rgba(255, 182, 220, 0.15);
}

.ui-card:hover {
  transform: translateY(-6px);

  box-shadow:
      0 15px 35px rgba(255, 105, 180, 0.2);

  border-color: rgba(255, 105, 180, 0.25);
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