var api = "http://localhost/GoDigItREST/";

$(function() {
    $("#create-user .confirm").click(function() {
        var username = $("#create-user .username").val();
        var email = $("#create-user .email").val();
        var password = $("#create-user .password").val();
        
        $.ajax({
            method: "POST",
            url: api + "users.php",
            dataType: "json",
            data: {
                username: username,
                email: email,
                password: password
            },
            success: function(data, status, xhr) {
                alert(data);
            }
        });
    });
});