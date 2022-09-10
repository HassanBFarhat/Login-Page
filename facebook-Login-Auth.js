// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log("statusChangeCallback");
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === "connected") {
        // Logged into your app and Facebook.
        testAPI();
    }
}
    // This function is called when someone finishes with the Login
    // Button. See the onlogin handler attached to it in the sample
    // code below.
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: "737163577477249",
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: "v14.0", // use version 14.0
     });
    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus(). This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide. They can be:
    //
    // 1. Logged into your app ('connected')
    //
    // This case is handled in the callback function.
  
FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
    });
};

// Load the SDK asynchronously
(function (d, s, id) {
    var js,
    fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  
// Here we run a very simple test of the Graph API after login is
// successful. See statusChangeCallback() for when this call is made.
function testAPI() {
    FB.login(function (response) {
        if (response.authResponse) {
        window.top.location =
            "http://localhost/php_program/Login-Page/landing.html";
        }
    });
}