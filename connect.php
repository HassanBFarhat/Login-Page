<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$dateOfBirth = $_POST['dateOfBirth'];
$gender = $_POST['gender'];
$username = $_POST['username'];
$psword = $_POST['psword'];

//data base connection
$conn = new mysqli('localhost', 'root','', 'registration_information');
if($conn -> connect_error){
    die('Connection Failed : '.$conn->connect_error);
} 
else {
    $stmt = $conn -> prepare("insert into registration(firstName, lastName, dateOfBirth, gender, username, psword)
        values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $firstName, $lastName, $dateOfBirth, $gender, $username, $psword);
    $stmt->execute();
    echo "registration successful...";
    $stmt->close();
    $conn->close();
}
?>