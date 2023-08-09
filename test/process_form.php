<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient = "mjwalkerprojets@google.com"; // Replace with your email address
    $subject = "New Contact Form Submission";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $headers = "From: $email";

    if (mail($recipient, $subject, $message, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>
