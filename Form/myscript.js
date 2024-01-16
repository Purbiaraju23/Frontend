function validate()
{
    var password = document.getElementById('password').value.trim();
    var validPassword = /^(?=.*\d).{8,}$/;

    if(!validPassword.test(password))
    {
        alert("Password must have 8 characters and at least 1 digit !!");
    }
}