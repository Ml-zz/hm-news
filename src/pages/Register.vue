<template>
  <div>
    <hm-header>注册</hm-header>
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
      type="text"
      placeholder="请输入昵称"
      v-model="nickname"
      :rule="/^[\w\u4e00-\u9fa5]{6,8}$/"
      message="昵称格式不对"
      ref="nickname"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></hm-input>

    <hm-botton @click="register">注册</hm-botton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: ''
    }
  },
  methods: {
    register() {
      const result1 = this.$refs.username.validate(this.username)
      const result2 = this.$refs.password.validate(this.password)
      const result3 = this.$refs.nickname.validate(this.nickname)
      if (!result1 || !result2 || !result3) console.log('我要注册')
      this.$axios({
        method: 'post',
        url: '/register',
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.statusCode === 401) {
          this.$toast.fail('用户名已存在')
        } else if (res.data.statusCode === 200) {
          this.$router.push({
            name: 'login',
            params: {
              username: this.username,
              password: this.password
            }
          })
        }
      })
    }
  }
}
</script>

<style>
</style>