interface User {
  name: string,
  email: string,
  password: string
}

const users: Array<User> = [
  {
    name: 'Paulo',
    password: '12345678',
    email: 'paulo@admin.com'
  },
]

export default {
  users
}