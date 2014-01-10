function validateUser() {
  if (!$('.usernameField').val()) {
    console.log("Username Doesn't Work");
  } else {
    console.log("Username Works: " + $('.usernameField').val());
  }
}

function validatePassword() {
  if ($('.passwordField').val().match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()]).{6,}$/)) {
    console.log("Password Doesn't Works");
  } else {
    console.log("Password Works: " + $('.passwordField').val());
  }
}

$('.submit').click(function validate() {
  validateUser();
  validatePassword();
});
