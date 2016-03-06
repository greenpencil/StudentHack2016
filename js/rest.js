var api = "http://localhost/GoDigItREST/";

$(function() {
    var createUserForm = $("#show-register");
    createUserForm.find(".confirm").click(function() {
        var username = createUserForm.find(".username").val();
        var email = createUserForm.find(".email").val();
        var password = createUserForm.find(".password").val();

        if (!username) {
            createUserForm.find(".error").text("Please enter a valid username.");
        }
        else if (!email) {
            createUserForm.find(".error").text("Please enter a valid email.");
        }
        else if (!password) {
            createUserForm.find(".error").text("Please enter a valid password.");
        }
        else {
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
                    console.log(data);
                    if ("error" in data) {
                        createUserForm.find(".error").text("Error: " + data.error);
                    }
                    else {
                        createUserForm.find(".success").text("Success! " + data.username);
                        $("#show-register").closeModal();
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

    var createHuntForm = $("#create-hunt");
    createHuntForm.find(".confirm").click(function(){
        console.log("create initiated");
        $.ajax({
            method: "PUT",
            url: api + "puzzles.php",
            dataType: "json",
            data: {
                name: createHuntForm.find(".puzzle-name").val(),
                description:createHuntForm.find(".description").val(),
                latitude:createHuntForm.find(".latitude").val(),
                longitude:createHuntForm.find(".longitude").val()
            },
            success: function(data, status, xhr) {
                console.log(data);

                if ("error" in data) {
                    createHuntForm.find(".error").text("Error: " + data.error);
                }
                else {
                    //Ajaxception
                    $.ajax({
                        method: "PUT",
                        url: api + "hunts.php",
                        dataType: "json",
                        data: {
                            name: createHuntForm.find(".hunt-name").val(),
                            clue1:createHuntForm.find(".clue1").val(),
                            clue2:createHuntForm.find(".clue2").val(),
                            clue3:createHuntForm.find(".clue3").val(),
                            comments:createHuntForm.find(".comments").val()
                        },
                        success: function(data, status, xhr) {
                            console.log(data);
                            if ("error" in data) {
                                createHuntForm.find(".error").text("Error: " + data.error);
                            }
                            else {
                                console.log("actual success");

                                createHuntForm.find(".success").text("WEEEEEEE");
                            }
                        }
                    });
                }
            }
        });
    });





});