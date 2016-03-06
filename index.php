<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
	<meta name="theme-color" content="#795548" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

    <script src="js/jquery-2.2.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <script src="js/enhance.js"></script>
    <script src="js/rest.js"></script>

</head>
<body>
    <nav class="brown">
        <div class="nav-wrapper" style="width:80%; margin:0 auto;">
            <a href="#" class="brand-logo">go d<img src="img/shovel.png" style="-webkit-transform: rotate(180deg);margin-bottom: -9px;"/>g it</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a class="modal-trigger btn" href="#show-register">Register</a></li>
                <li><a class="modal-trigger btn" href="#show-login">Login</a></li>
            </ul>
        </div>
    </nav>
    <div id="show-register" class="modal modal-fixed-footer">
        <div class="modal-content">
            <h4>Register</h4>
            <p>Join the adventure!</p>
            <div id="create-user">
                <div class="input-field">
                    <input type="text" class="username" />
                    <label>Username</label>
                </div>
                <div class="input-field">
                    <input type="email" class="email validate" />
                    <label>Email</label>
                </div>
                <div class="input-field">
                    <input type="password" class="password" />
                    <label>Password</label>
                </div>
                <p class="success" style="color: green;"></p>
                <p class="error" style="color: red;"></p>
            </div>
        </div>
        <div class="modal-footer">
            <a class="confirm waves-effect waves-green btn-flat ">Register</a>
        </div>
    </div>
    <div id="show-login" class="modal modal-fixed-footer">
        <div class="modal-content">
            <h4>Login</h4>
            <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
        </div>
    </div>
	<h4>Welcome Katie</h4>
	<hr/>
	<h5>Things to do</h5>
	<div class="row" style="margin-bottom:0px;">
        <div class="col s12 m12 l12">
            <div class="card-panel light-green lighten-3" style="margin: -0.5rem 0 1rem 0;">
		        <i class="fa fa-search"></i> Notification
            </div>
        </div>
    </div>

	<div class="row" style="margin-bottom:0px;">
	    <div class="col s12 m12 l12">
		    <div class="card-panel blue lighten-3" style="margin: -0.5rem 0 1rem 0;">
			    <i class="fa fa-search"></i> Notification
		    </div>
	    </div>
	</div>

	<hr />
	<h5>Join a hunt</h5>

	<hr/>
	<h5>Local feed</h5>

	<div id="create-hunt">
	     <div class="input-field">
            <input type="text" class="hunt-name" />
            <label>Name</label>
        </div>
        <div class="input-field">
            <input type="text" class="clue1" />
            <label>Clue 1</label>
        </div>
        <div class="input-field">
            <input type="text" class="clue2" />
            <label>Clue 2</label>
        </div>
        <div class="input-field">
            <input type="text" class="clue3" />
            <label>Clue 3</label>
        </div>

        <div class="input-field">
            <input type="text" class="puzzle-name" />
            <label>Puzzle name</label>
        </div>

        <div class="input-field">
            <input type="text" class="description" />
            <label>Description</label>
        </div>

        <div class="input-field">
            <input type="text" class="latitude" />
            <label>Latitude</label>
        </div>

        <div class="input-field">
            <input type="text" class="longitude" />
            <label>Longitude</label>
        </div>
        <a class="confirm waves-effect waves-green btn-flat ">Create hunt</a>
    </div>
    <!--<iframe src="http://twubs.com/embed/godigit/?messagesPerPage=5&headerBgColor=%231c6485&headerTextColor=%23ffffff" width="350" height="600" frameborder="0"><a href="http://twubs.com/godigit">#godigit</a></iframe>-->
    </body>
</html>
