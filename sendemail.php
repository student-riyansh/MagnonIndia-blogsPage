<?php

if(isset($_POST["fname"]) && isset($_POST["phone"])) {
    // Read the form values
    $fName = isset($_POST['fname']) ? filter_var($_POST['fname'], FILTER_SANITIZE_STRING) : "";
    $phone = isset($_POST['phone']) ? filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT) : "";

    // Email details
    $to = "reachus@magnonindia.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $message = "Name: " . $fName . "\n";
    $message .= "Phone Number: " . $phone . "\n";
    $headers = "From: magnonindia.com"; // Replace with your email address

    // Send email
    if(mail($to, $subject, $message, $headers)) {
        echo "<p>Your message has been sent successfully!</p>";
    } else {
        echo "<p>Something went wrong. Please try again later.</p>";
    }
} else {
    echo "<p>Invalid request. Please fill out the form completely.</p>";
}
?>