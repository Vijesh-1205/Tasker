document.getElementById('signupopen').addEventListener("click", function () {
    document.querySelector('.signup-popup').style.display = "block";
});

document.getElementById('loginn').addEventListener("click", function () {
    document.querySelector('.signup-popup').style.display = "none";
});

document.querySelector('.signup button').addEventListener("click", function () {
    var names = document.getElementById('name').value;
    var emails = document.getElementById('email').value;
    var passwords = document.getElementById('password').value;

    // Retrieve users array from localStorage or initialize it as an empty array if null
    var users = JSON.parse(localStorage.getItem("users"));



    // Push the new user object into the array
    users.push({
        name: names,
        email: emails,
        password: passwords
    });

    // Store the updated users array back into localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful');
});

document.querySelector('.box button').addEventListener("click", function () {
    var nameValue = document.getElementById('mail').value;
    var passwordValue = document.getElementById('pass').value;

    // Retrieve users array from localStorage or initialize it as an empty array if null
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Ensure users is an array
    if (!Array.isArray(users)) {
        users = [];
    }

    // Find the user with the provided email and password
    var currentUser = users.find(function (user) {
        return user.email === nameValue && user.password === passwordValue;
    });

    if (!currentUser) {
        alert("Invalid email or password");
    }
    else{
        window.location.href = "home.html";
    }

    // Redirect to the home page upon successful login
    
});
