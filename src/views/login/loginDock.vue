<template>
  <div class="loginDock">
    <div v-show="ewm">
      <el-image
        class="banner"
        fit="cover"
        src="https://img01.yzcdn.cn/upload_files/2021/04/13/FoDhCu4oGT1yJkBDIa22qZlkRGEW.jpeg"
      />
      <el-row>
        <el-col :span="8"/>
        <el-col :span="8">
          <el-avatar
            shape="square"
            :size="150"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </el-col>
        <el-col :span="8"/>
      </el-row>
      <el-row>
        <el-col :span="12"> </el-col>
        <el-col :span="12"> </el-col>
      </el-row>
      <el-card shadow="hover" style="height:32vh">
        <el-row style="margin-top:2vh">
          <el-col :span="2" />
          <el-col :span="20"
            ><span>账号：</span
            ><el-input
              class="el-input_customize"
              placeholder="请输入用户名"
              prefix-icon="el-icon-search"
              v-model="input1"
              size="medium"
            />
          </el-col>
          <el-col :span="2" />
        </el-row>
        <el-row style="margin-top:2vh">
          <el-col :span="2" />
          <el-col :span="20"
            ><span>密码：</span
            ><el-input
              class="el-input_customize"
              placeholder="请输入密码"
              prefix-icon="el-icon-search"
              v-model="input1"
              size="medium"
            >
            </el-input
          ></el-col>
          <el-col :span="2" />
        </el-row>
        <el-row style="margin-top:5vh">
          <el-col :span="24">
          <el-button-group style="width:100%">
            <el-button style="width:50%" plain>二维码登录</el-button>
            <el-button style="width:50%" type="success" plain>登录</el-button>
          </el-button-group>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginDock",
  setup() {
    let ewm = true;
    let loginType = {};
    return { ewm };
  },
});
</script>

<style scoped lang="sass">
.loginDock
  background:#f5f9fe

p,
h1,
h2,
span
  font-family: system-ui, -apple-system, Arial, sans-serif
  font: 1.5em sans-serif

.el-input_customize
  width: 80%

.banner
  height: 100px

>>> .el-input__inner
  height: 50px
</style>