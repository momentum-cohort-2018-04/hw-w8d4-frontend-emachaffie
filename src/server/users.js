const users = [
  {id: 1, username: 'addison', password: 'height-RHYTHM-feed-died'},
  {id: 2, username: 'skyler', password: 'valley-AUNT-stone-DAILY'},
  {id: 3, username: 'liz', password: 'alohamora'}
]

const findByUsername = (username) => {
  return users.find(user => user.username === username)
}

module.exports = {
  findByUsername
}
