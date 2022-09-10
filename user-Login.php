<?php

$conn = mysqli_connect("localhost","root","", "registration_information");

if(isset($_POST["uname"])){
    $userName = $_POST["uname"];
    $password = $_POST["psw"];

    $sql = "SELECT * FROM registration WHERE username='$userName' AND psword='$password' LIMIT 1";

    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) == 1){
        header("Location: http://localhost/php_program/Login-Page/landing.html");
        exit();
    } else {
        echo "One of more info is wrong. Try again";
        exit();
    }
}




?>