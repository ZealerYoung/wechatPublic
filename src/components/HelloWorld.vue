<template>
  <div>
    <Button type="primary" size="small">主要按钮</Button>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "HelloWorld",
  components: {
    Button
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
