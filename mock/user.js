const userList = [
  { username: 'admin', password: '123', role: 'admin' },
  { username: 'editor', password: '456', role: 'editor' },
  { username: 'xueyue', password: '123456', role: 'admin' }
]

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/api/user/login',
    type: 'post',
    response: ({ body }) => {
      console.log(body)
      let flag = false
      let role = ''
      userList.forEach((item) => {
        if (item.username === body.username && item.password === body.password) {
          flag = true
          role = item.role
        }
      })
      if (flag) {
        return {
          code: 200,
          message: '登录成功',
          role,
          token: new Date().getTime().toString(32)
        }
      } else {
        return {
          code: 400,
          message: '用户名或密码错误'
        }
      }
    }
  },

  // get user info
  {
    url: '/api/user/info.*',
    type: 'get',
    response: (config) => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/api/user/logout',
    type: 'post',
    response: (_) => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  // user list
  {
    url: '/api/user/list',
    type: 'get',
    response: (_) => {
      return {
        code: 20000,
        data: userList
      }
    }
  }
]
