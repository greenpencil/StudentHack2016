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

    var updateUserForm = $("#update-user");

    var username = "Jean-Marie";
    var email = "jean-marie@mdr.fr";
    var password = "NESTCEPAS";

    updateUserForm.find(".username").val(username);
    updateUserForm.find(".email").val(email);

    updateUserForm.find(".confirm").click(function() {

        var username = updateUserForm.find(".username").val();
        var email = updateUserForm.find(".email").val();
        var password = updateUserForm.find(".password").val();

        if (username && email && password) {

            $.ajax({
                method: "PUT",
                url: api + "users.php",
                dataType: "json",
                data: {
                    username: username,
                    email: email,
                    password: password
                },
                success: function(data, status, xhr) {
                    if ("error" in data) {
                        updateUserForm.find(".error").text("Error: " + data.error);
                    }
                    else {
                        updateUserForm.find(".success").text("Success! " + data.username);
                        updateUserForm.find(".email").val(email);
                    }
                }
            });
        }
    });

});