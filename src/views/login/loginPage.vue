<template>
  <div id="loginPage">
      <div >

      </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "LoginPage",
  setup() {
    let bgData = reactive([
      "https://img01.yzcdn.cn/upload_files/2021/04/13/Fv5qrJHqx4bTkHbQ9-895ai4k7nr.jpeg",
      "https://img01.yzcdn.cn/upload_files/2021/04/13/FoDhCu4oGT1yJkBDIa22qZlkRGEW.jpeg",
      "https://img01.yzcdn.cn/upload_files/2021/04/13/FnSJDbMCEtJJTFWR9qDBoMCEy0ER.jpeg",
    ]);
    return { bgData };
  },
};
</script>

<style scoped>
#loginPage{
    display:grid;
}
</style>