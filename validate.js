function validateUser() {
  if (!$('.usernameField').val()) {
    $('.usernameField').addClass('success');
    console.log("Username Doesn't Work");
  } else {
    $('.usernameField').addClass('error');
    console.log("Username Works: " + $('.usernameField').val());
  }
}

function validatePassword() {
  if ($('.passwordField').val().match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()]).{6,}$/)) {
    $('.passwordField').addClass('success');
    console.log("Password Works: " + $('.passwordField').val());
  } else {
    $('.passwordField').addClass('error');
    console.log("Password Doesn't Work");
  }
}

function validate() {
  validateUser();
  validatePassword();
}
