<template>
  <div class="spinner-box">
    <div class="three-quarter-spinner"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.three-quarter-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #fb5b53;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 0.5s linear 0s infinite;
}

.spinner-box {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
