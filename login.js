$(document).ready(function() {

    $(".login").on('click', function() {
        var regex = /[a-z]/;
        var userRegex = /^[a-zA-Z][a-zA-Z0-9@!]{5,12}$/
        var passRegex = /^[a-z](?=.*\d)((?=.*\$)|(?=.*!)|(?=.*@)|(?=.*&))(?=.*[A-Z])[a-zA-Z0-9!@$&]{7,12}$/
        var userName = $('.username').prop("value")
        console.log(userName)
        var pass = $('.password').prop("value")
        if (userName != '') {
            if (userRegex.test(userName)) {
                alert("loggedin");
            } else {
                alert("invalid username");
            }
        } else {
            alert("username is empty")
        }
    });
});
