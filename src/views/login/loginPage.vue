<template>
  <div id="loginPage">
    <div class="box-father item-1">
      
    </div>
    <div class="box-father box-son">
      <div class="box-father item-3">

      </div>
      <LoginDock/>
      <div class="box-father item-4">

      </div>
    </div>
    
  </div>
</template>

<script>
import { reactive,defineComponent } from "vue";
import LoginDock from './loginDock.vue'
export default defineComponent({
  name: "LoginPage",
  components:{
    LoginDock
  },
  setup() {
    let bgData = reactive([
      "https://img01.yzcdn.cn/upload_files/2021/04/13/Fv5qrJHqx4bTkHbQ9-895ai4k7nr.jpeg",
      "https://img01.yzcdn.cn/upload_files/2021/04/13/FoDhCu4oGT1yJkBDIa22qZlkRGEW.jpeg",
      "https://img01.yzcdn.cn/upload_files/2021/04/13/FnSJDbMCEtJJTFWR9qDBoMCEy0ER.jpeg",
    ]);
    return { bgData };
  },
});
</script>

<style scoped>
#loginPage {
  margin:-8px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100vh;
  animation: animations 1s cubic-bezier(0.215, 0.61, 0.355, 1);
}
@keyframes animations {
  0% {
    opacity: 0;
    transform: translate3d(-440px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  100% {
    transform: none;
  }
}
.box-father {
  font: 2em sans-serif;
  border: 1px solid #e5e4e9;
}

.box-son {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15vh 70vh 14.8vh;
}

.item-1 {
  background-color: #9999f0;
}

.item-3 {
  background-color: pink;
}

.item-4 {
  background-color: gray;
}
</style>