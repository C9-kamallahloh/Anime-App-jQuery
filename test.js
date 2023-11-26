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
  