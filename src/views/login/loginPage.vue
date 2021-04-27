<template>
  <div id="loginPage">
    <div class="box-father item-1">
      <LoginNews />
    </div>
    <div class="box-father box-son">
      <div class="box-father item-3"></div>
      <LoginDock />
      <div class="box-father item-4"></div>
    </div>
  </div>
</template>

<script>
import { reactive, defineComponent } from "vue";
import LoginDock from "./loginDock.vue";
import LoginNews from "./loginNews.vue";
export default defineComponent({
  name: "LoginPage",
  components: {
    LoginDock,
    LoginNews,
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
  margin: -8px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 100vh;
  animation: animations 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  font-family: system-ui, -apple-system, Arial, sans-serif;
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
  border: 1px solid #e5e4e9;
}

.box-son {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15vh 70vh 14.8vh;
}

.item-1 {
  background-color: #9999f0;
  overflow: auto;
  height: 100vh;
}
.item-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 0px;
}
.item-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 0px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.item-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0px;
  background: #ededed;
}
.item-3 {
  background-color: pink;
}

.item-4 {
  background-color: gray;
}
</style>