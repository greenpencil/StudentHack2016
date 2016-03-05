var api = "http://localhost/GoDigItREST/";

$(function() {
    var createUserForm = $("#create-user");
    createUserForm.find(".confirm").click(function() {

        var username = createUserForm.find(".username").val();
        var email = createUserForm.find(".email").val();
        var password = createUserForm.find(".password").val();

        if (username && email && password) {

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
                    if ("error" in data) {
                        createUserForm.find(".error").text("Error: " + data.error);
                    }
                    else {
                        createUserForm.find(".success").text("Success! " + data.username);
                    }
                }
            });
        }
    });
});