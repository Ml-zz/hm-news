<template>
  <div class="login">
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>

    <hm-input
      type="text"
      placeholder="请输入用户名"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></hm-input>

    <hm-botton @click="login">登录</hm-botton>

    <div class="go-register">
      还没有注册吧
      去
      <router-link to="./Register" class="link">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    this.username = this.$route.params.username
    this.password = this.$route.params.password
  },
  methods: {
    login() {
      const result1 = this.$refs.username.validate(this.username)
      const result2 = this.$refs.password.validate(this.password)
      if (!result1 || !result2) {
        return
      }
      console.log('我要登录')
      this.$axios({
        method: 'post',
        url: '/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.statusCode === 401) {
          this.$toast.fail('用户名或者密码错误')
        }
        if (res.data.statusCode === 200) {
          this.$router.push('/user')
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.go-register {
  text-align: right;
  padding: 20px;
}
</style>