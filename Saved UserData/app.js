
let fullName = prompt("Enter your full name");

let age = prompt("Enter your age");

let city = prompt("Enter your city");

let profession = prompt("Enter your profession");

let email = prompt("Enter your email");

let phone = prompt("Enter your phone number");



let user = {

    name: fullName,
    age: age,
    city: city,
    profession: profession,
    email: email,
    phone: phone,

};



let users = [];




let oldUsers = localStorage.getItem("users");


if(oldUsers){

    users = JSON.parse(oldUsers);

}


users.push(user);


localStorage.setItem(
    "users",
    JSON.stringify(users)
);



let userData = document.getElementById("userData");



let savedUsers = JSON.parse(
    localStorage.getItem("users")
);



savedUsers.forEach(function(user){


    userData.innerHTML += `

    <div class="user">

    <h3>Name: ${user.name}</h3>

    <p>Age: ${user.age}</p>

    <p>City: ${user.city}</p>

    <p>Profession: ${user.profession}</p>

    <p>Email: ${user.email}</p>

    <p>Phone: ${user.phone}</p>

    </div>

    `;


});



