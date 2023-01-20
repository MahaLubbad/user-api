import userComponents    from "../component/user.js";

import getUsers         from "../../API/getUsers.js";

// DOM ELEMENTS
var usersMainDom = document.getElementById("users");
//const error      = document.getElementById("error");

function getUsersHandler ()
{
   getUsers()  // RETURN PROMISE 
   .then(users =>
   { 
      usersMainDom.innerHTML = "";  
     
      if( users)
      {
          
         users.forEach(user => 
         {
            const UserInfo = userComponents(user);         
            usersMainDom.append(UserInfo);  
   
         });
      }
      
   })
   .catch(err => console.error(err));  
    
}

export default getUsersHandler;