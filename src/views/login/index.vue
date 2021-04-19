<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="login-title">系统登录</div>
      <el-form ref="loginRef" class="login-form" :model="param" :rules="rules" status-icon>
        <el-form-item prop="username">
          <el-input v-model="param.username" clearable placeholder="用户名">
            <template #prepend>
              <i class="el-icon-s-custom" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="param.password"
            clearable
            placeholder="密码"
            type="password"
            @keyup.enter.native="submitForm"
          >
            <template #prepend>
              <i class="el-icon-lock" />
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" :loading="btnLoading" @click="submitForm">登录</el-button>
        </div>
        <p class="login-tips">用户名: admin 密码: 123</p>
        <p class="login-tips">用户名: editor 密码: 456</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { setToken, setRoles } from '@/utils/auth'
import { login } from '@/api/user'

export default {
  data() {
    return {
      btnLoading: false,
      param: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.loginRef.validate(valid => {
        if (valid) {
          this.btnLoading = true

          setTimeout(() => {
            this.btnLoading = false
            this.$message.success('登录成功')
            setToken(this.param.password)
            setRoles(this.param.username)
            this.$router.push('/')
          }, 800)

          // // 访问登录接口
          // login(this.param)
          //   .then(res => {
          //     if (res.code === 200) {
          //       // 登录成功后；保存用户信息以及token
          //       this.$message.success(res.message)
          //       setToken(res.token)
          //       setRoles(res.role)
          //       this.$router.push('/')
          //     } else {
          //       this.$message.error(res.message)
          //     }
          //   })
          //   .finally(() => {
          //     this.btnLoading = false
          //   })
        } else {
          this.$message.error('请输入用户名和密码')
        }
      })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  background-image: url(../../assets/login_bg.jpg);
  background-size: cover;
}

.login-title {
  width: 100%;
  font-size: 20px;
  line-height: 50px;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.login-content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
}

.login-form {
  padding: 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}

.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #be1480;
}
</style>
