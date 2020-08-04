<?php

// Grab the fields from the post method
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$company = $_POST["company"];
$message = $_POST["message"];


$EmailTo = "somemail@test.com";
$Subject = "New Message Received";


// Create an array of the contact form fields.
$test = array(
  'name' => $name,
  'email' => $email,
  'phone' => $phone,
  'company' => $company,
  'message' => $message
);

// Create JSON encoded string.
$my_json = json_encode($test);

// Console log the JSON encoded string.
var_dump($my_json);

// send email
$success = mail($EmailTo,  $Subject,  $my_json, "From:".$email);