<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" class="login-form" :rules="rules">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <el-icon class="svg-container"><User /></el-icon>
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-icon class="svg-container"><Lock /></el-icon>
        <el-input v-model="form.password" :type="passwordType" />
        <el-icon class="svg-container" @click="changeType"><View /></el-icon>
      </el-form-item>
      <el-button class="login-button" @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Lock } from "@element-plus/icons";
import { User } from "@element-plus/icons";
import { login } from "@/api/login";
import { View } from "@element-plus/icons";
import { useRouter } from 'vue-router'; 

const form = ref({
  username: "",
  password: "",
});

const router = useRouter();  

const rules = ref({
  username: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "blur",
    },
  ],
});

const formRef = ref(null);
const handleLogin = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      console.log(form.value);
      await login(form.value)
        .then((response) => {
          //admin登录成功处理
          if (response.data.success && response.data.user.role === 'admin') {
            console.log("管理员登录成功");
            router.push({ path: '/admin' }); 
          } else if(response.data.success && response.data.user.role === 'user'){
            //TODO:用户登录页面
            console.log("用户登录成功");
            router.push({ path: '/user' }); 
          }
          else {
            //TODO:失败弹窗
            console.log(response.data)
            alert("密码或用户名错误！")
            console.log("登录失败");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      return false;
    }
  });
};

const passwordType = ref("password");
const changeType = () => {
  if (passwordType.value === "password") {
    passwordType.value = "text";
  } else {
    passwordType.value = "password";
  }
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100vh;
  width: 100vw;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      height: 47px;
      width: 85%;
      .el-input__wrapper {
        box-shadow: none;
        background-color: transparent;
      }

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    // position: absolute;
    // right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
