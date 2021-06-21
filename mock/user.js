const userList = [
  { username: 'admin', password: '123', role: 'admin', token: 'admin-token' },
  { username: 'editor', password: '456', role: 'editor', token: 'editor-token' },
  { username: 'xueyue', password: '123456', role: 'admin', token: 'xueyue-token' }
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
  },
  'xueyue-token': {
    roles: ['admin'],
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
    timeout: '1000-4000',
    response: ({ body }) => {
      let flag = false
      let role = ''
      let token = ''
      userList.forEach((item) => {
        if (item.username === body.username && item.password === body.password) {
          flag = true
          role = item.role
          token = item.token
        }
      })
      if (flag) {
        return {
          code: 200,
          message: '登录成功',
          role,
          token
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
