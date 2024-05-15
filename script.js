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

    var users = JSON.parse(localStorage.getItem("users"));
    users.push({
        name: names,
        email: emails,
        password: passwords
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful');
});

document.querySelector('.box button').addEventListener("click", function () {
    var nameValue = document.getElementById('mail').value;
    var passwordValue = document.getElementById('pass').value;
    var users = JSON.parse(localStorage.getItem("users"));
    
    var currentUser = users.find(function (user) {
        return user.email === nameValue && user.password === passwordValue;
    });

    if (!currentUser) {
        alert("Invalid email or password");
    }
    else{
        window.location.href = "home.html";
    }

    
});
