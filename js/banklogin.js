document.getElementById ('login-submit').addEventListener ( 'click', function(){

    // const emailField = document.getElementById ('user-email');
    // const userEmail = emailField.value;

    const userEmail = document.getElementById('user-email').value;

    // const passwordField = document.getElementById ('user-password');
    // const userPassword = passwordField.value;

    const userPassword = document.getElementById('user-password').value;

    if (userEmail == 'hei123@gmail.com' && userPassword == '123456') {
        window.location.href = 'other.html';
    }
});