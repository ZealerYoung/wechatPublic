<template>
  <div class="hello"></div>
</template>

<script>
import * as sessiondate from "@/wxUtil/staticData";
export default {
  created() {
    window.location.href = sessiondate.weixin;
  }
};
</script>
<style scoped>
</style>