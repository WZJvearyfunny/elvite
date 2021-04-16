<template>
  <div>
    <div v-show="ewm">
      <el-row>
        <el-col :span="12">
          <el-avatar
            shape="square"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </el-col>
        <el-col :span="12"
          ><el-avatar
            shape="square"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginDock",
  setup() {
    let ewm = true;
    return { ewm };
  },
});
</script>

<style scoped>
</style>