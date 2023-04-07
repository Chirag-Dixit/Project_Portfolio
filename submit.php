<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $phno = filter_var($_POST['phno'], FILTER_SANITIZE_STRING);

  $data = "Name: " . $name . "\n" .
          "Email: " . $email . "\n" .
          "Phone Number: " . $phno . "\n\n";

  $file = fopen("data.txt", "a");
  fwrite($file, $data);
  fclose($file);

  echo "Thank you for your message!";
}
?>
