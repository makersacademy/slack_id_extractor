const util = require('util')

const USERS = require('./users.json')
const NAMES = [
  "Example student"
]

const summariseUser = (user) => {
  return {
    id: user.id,
    handle: user.name,
    name: getRealName(user)
  }
}

const getRealName = (user) => {
  return user.real_name || user.profile.real_name
}

const isStudent = user => !(user.is_admin || user.is_owner || user.is_bot || user.deleted)

const normalised = name => name.toLowerCase()

const alphabetically = (user1, user2) => {
  if(user1.name > user2.name) return 1;
  if(user2.name > user1.name) return -1;
  return 0;
}

const select = users => users.filter(isStudent) 
const summarise = users => users.map(summariseUser)
const alphabetise = users => users.sort(alphabetically)

const LIST = alphabetise(summarise(select(USERS)))

const findUser = name => LIST.find(user => normalised(user.name) == normalised(name))

const toSlackId = (names) => {
  return names.map((name) => {
    const user = findUser(name)

    if(typeof user === 'undefined') return "";
    return user.id
  })
}

const printNicely = (list) => {
  for (var i = 0; i < list.length; i++) {
    console.log(list[i])
  }
}

util.inspect.defaultOptions.maxArrayLength = null; 

console.log("---Copy from line below this one---")
printNicely(toSlackId(NAMES))
console.log("---To line above this one---")