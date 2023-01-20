

function userComponents (user) {
    const container = document.createElement("div");
    container.classList.add("user");

  let name = document.createElement("h4");
    name.classList.add("name");
    name.innerText =  `Name  : ${user.name}`;
   
   let company = document.createElement("h4");
    company.classList.add("company");
    company.innerText =  `Company  : ${user.company.name}`;

    let phone = document.createElement("h4");
    phone.classList.add("phone");
    phone.innerText =  `Phone  : ${user.phone}`;

    container.append(name, company, phone);
    return container;

}
 export default userComponents;