var user = $('.username-field'),
    pass = $('.password-field');

function validateUser() {
  if (!user.val()) {
    user.addClass('success');
    console.log("Username Doesn't Work");
  } else {
    user.addClass('error');
    console.log("Username Works: " + user.val());
  }
}

function validatePassword() {
  if (pass.val().match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()]).{6,}$/)) {
    pass.addClass('.success');
    console.log("Password Works: " + pass.val());
  } else {
    pass.addClass('error');
    console.log("Password Doesn't Work");
  }
}

function validate() {
  validateUser();
  validatePassword();
}
