const usersOb = {
  mrpotato: {
    email: "mr.potato@gmail.com",
    password: "LonelyPotato",
  },
  thewiseman: {
    email: "wiseMan9999@gmail.com",
    password: "12345678",
  },
};

const isValidUser = function (loginInfo) {

  if (loginInfo.email.length < 16) return false + " User must be >= 6";
  if (loginInfo.password.length < 8) return false + " PW must be > 8";
  if (!(loginInfo.email.includes("@") && loginInfo.email.includes(".com")))
    return false + " Email without @ or .com";
  if (!Object.keys(usersOb).includes(loginInfo.username.toLowerCase()))
    return false + "wrong user";
  if (
    usersOb.mrpotato.password === loginInfo.password ||
    usersOb.thewiseman.password === loginInfo.password
  )
    return true;
  return false + " wrong PW";
};




//* ////////////////////////////////////////////////


const users = [
  { username: "Jane", password: "123456" },
  { username: "admin", password: "abc123" },
];

const login = function (username, password) {
  // TODO: Your code here

  for (let index = 0; index < users.length; index++) {
    if (
      username === users[index].username &&
      password === users[index].password
    ) {
      return "Login Successful";
    }
  }
  return "Login Failed";
};

console.log(login("Jane", "123456"));


//* ////////////////////////////////////////////////


const allUsers = [
    { username: "Jane", password: "123456" },
    { username: "admin", password: "abc123" },
  ];
  
  const createUser = function (username, password) {
    // TODO: Your code here
  
    for (let index = 0; index < allUsers.length; index++) {
      if (username === allUsers[index].username) {
        return "That username is not available";
      }
    }
  
    allUsers.push({ username: username, password: password });
  
    return "Registration successful";
  };
  
  console.log(createUser("James", "123456")); // => "Registration successful"
  console.log(allUsers);
  

//* ////////////////////////////////////////////////




const usersIP2 = {
  userOne: { username: "Jane", password: "123456" },
  userTwo: { username: "admin", password: "abc123" },
};

const loginIP2 = function (username, password) {
  // TODO: Your code here

  for (const key in usersIP2) {
    if (usersIP2[key].username === username && usersIP2[key].password === password)
      return console.log("Login Successful");
  }

  return console.log("Login Failed");
};

loginIP2("Jane", "123456"); // => "Login Successful"

//* ////////////////////////////////////////////////


