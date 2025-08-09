function signup() {
  var username = document.getElementById("signUp-username").value;
  var email = document.getElementById("signUp-email").value;
  var password = document.getElementById("signUp-password").value;
  if (!username || !email || !password) {
    alert("Please fill all the fields ");
    return;
  }
  axios
    .post("http://localhost:3000/signup", {
      username: username,
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
      alert("Signup successful!");
      window.location.href = "/signin";
    })
    .catch((error) => {
      console.error("Signup failed:", error);
    });
}

function signin() {
  var username = document.getElementById("signUp-username").value;
  var password = document.getElementById("signUp-password").value;
}
