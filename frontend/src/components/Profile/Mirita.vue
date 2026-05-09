<script setup lang="ts">

</script>

<template>
  <h1 class="mt-3">Никита <span>/ mirita</span></h1>
  <p class="subtitle">
    backend developer at <a style=" color: #ff4fa0" href="https://kontur-lite.ru/">Контур</a> • 1
    year experience
  </p>
  <div class="info-list mb-4">
    <div class="info-box">
      <span>Возраст</span>
      <strong>22</strong>
    </div>
    <div class="info-box">
      <span>Город</span>
      <strong>Новосибирск</strong>
    </div>
    <div class="info-box">
      <span>Stack</span>
      <strong>PHP / Vue</strong>
    </div>
  </div>
</template>

<style scoped>
.subtitle {
  color: #6b4b5d;
  font-size: 15px;
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