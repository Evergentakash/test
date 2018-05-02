function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
    	facebookAPI();     
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

//  window.fbAsyncInit = function() {
//  FB.init({
//    appId      : '1087971884642964',
//    cookie     : true,  // enable cookies to allow the server to access 
//    status     : true,                    // the session
//    xfbml      : true,  // parse social plugins on this page
//    version    : 'v2.5' // use graph api version 2.5
//  });
//
//  };
  
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function capitalizeFirstLetter(string) {
	    return string[0].toUpperCase() + string.slice(1);
	}
  
  function facebookAPI() {
    //console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=id,name,email,first_name,last_name,gender,birthday', function(response) {
    	//alert('Successful login for: ' + response.name);
    	
    	var data = 'name='+response.name+'&email='+response.email+'&fb_id='+response.id;
    	$.ajax({
            type: "POST",
            url: "/presales/user/facebookresponse",
            data: data,
            
            success: function (res) {
            	//alert(res);
            	if(res == 'true'){
            		window.location="/presales/myaccount/myaccountdetails";
            		
            	}else{
            		if(response.first_name != '' && response.first_name != 'undefined'){
                		document.getElementById('firstname').value = response.first_name;
                	}
                	if(response.last_name != '' && response.last_name != 'undefined'){
                		document.getElementById('lastname').value = response.last_name;
                	}
                	if(response.email != '' && response.email != 'undefined'){
                		document.getElementById('email').value = response.email;
                	}    	
                	var gender = capitalizeFirstLetter(response.gender);
                	document.getElementById("gender").value = gender;
                    document.getElementById("social_login_id").value = response.id;
                        
                    document.getElementById("password").type = 'hidden';
                    document.getElementById("conf_password").type = 'hidden';
                        
            	}
            }
        });
    });
  }
  
   