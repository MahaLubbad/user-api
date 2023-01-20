import userComponents from "../component/user.js";
import getUser from "../../API/getUser.js";
import idValidity from "../logic/idValidity.js";

let usersMainDom = document.getElementById("users");

function getUserHandler (id){

if (idValidity(id)){
    getUser(id) // RETURN PROMISE 

   .then(user =>
   {   
      if(user){
        const userInfo = userComponents(user);
        usersMainDom.innerHTML = '';
        usersMainDom.append(userInfo);
      }
     
})

.catch(err => console.error(err));  
}
}

export default getUserHandler;
