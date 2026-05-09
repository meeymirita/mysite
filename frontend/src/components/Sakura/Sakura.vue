<script setup lang="ts">

</script>

<template>
  <div class="sakura-container">
    <span class="petal"></span>
    <span class="petal"></span>
    <span class="petal"></span>
    <span class="petal"></span>
    <span class="petal"></span>
    <span class="petal"></span>
    <span class="petal"></span>
    <span class="petal"></span>
    <span class="petal"></span>
    <span class="petal"></span>
  </div>
</template>

<style scoped>

.sakura-container {
  position: fixed;
  inset: 0;

  overflow: hidden;

  pointer-events: none;

  z-index: 0;
}

.petal {
  position: absolute;

  top: -50px;

  width: 18px;
  height: 18px;

  background:
      linear-gradient(
          135deg,
          #ffd6ec,
          #ff9fcb
      );

  border-radius: 70% 0 70% 0;

  opacity: 0.8;

  animation:
      sakura-fall linear infinite,
      sakura-spin ease-in-out infinite;

  filter: blur(0.2px);

  box-shadow:
      0 0 10px rgba(255, 182, 220, 0.35);
}

.petal:nth-child(1) {
  left: 5%;
  animation-duration: 11s;
  animation-delay: 0s;
  width: 14px;
  height: 14px;
}

.petal:nth-child(2) {
  left: 15%;
  animation-duration: 15s;
  animation-delay: 2s;
}

.petal:nth-child(3) {
  left: 28%;
  animation-duration: 13s;
  animation-delay: 1s;
  width: 22px;
  height: 22px;
}

.petal:nth-child(4) {
  left: 40%;
  animation-duration: 18s;
  animation-delay: 3s;
}

.petal:nth-child(5) {
  left: 52%;
  animation-duration: 12s;
  animation-delay: 0s;
}

.petal:nth-child(6) {
  left: 63%;
  animation-duration: 16s;
  animation-delay: 5s;
  width: 20px;
  height: 20px;
}

.petal:nth-child(7) {
  left: 72%;
  animation-duration: 14s;
  animation-delay: 2s;
}

.petal:nth-child(8) {
  left: 83%;
  animation-duration: 19s;
  animation-delay: 1s;
}

.petal:nth-child(9) {
  left: 92%;
  animation-duration: 17s;
  animation-delay: 4s;
}

.petal:nth-child(10) {
  left: 48%;
  animation-duration: 20s;
  animation-delay: 6s;
}


@keyframes sakura-fall {

  0% {
    transform:
        translateY(-50px)
        translateX(0px)
        rotate(0deg);

    opacity: 0;
  }

  10% {
    opacity: 0.9;
  }

  50% {
    transform:
        translateY(50vh)
        translateX(40px)
        rotate(180deg);
  }

  100% {
    transform:
        translateY(110vh)
        translateX(-60px)
        rotate(360deg);

    opacity: 0;
  }
}

@keyframes sakura-spin {

  0% {
    border-radius: 70% 0 70% 0;
  }

  50% {
    border-radius: 50% 20% 60% 10%;
  }

  100% {
    border-radius: 70% 0 70% 0;
  }
}
</style>