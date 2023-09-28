// IMPORT 
import getUsersHandler from "../handlers/getUsers.js";

// DOM ELEMENTS 
const usersButton = document.getElementById("get-users");

usersButton.addEventListener("click", function(e)
{
    e.preventDefault();
    getUsersHandler();
});