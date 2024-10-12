document.getElementById("userinfo").onsubmit = function() { 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Age: " + age);


    alert("Form Submitted! Name: " + name + ", Email: " + email + ", Age: " + age);
};