<?php

if ( isset( $_POST['email'] ) ) {
	// Read the form values
	$success     = false;
	$senderEmail = isset( $_POST['email'] ) ? preg_replace( '/[^\.\-\_\@a-zA-Z0-9]/', '', $_POST['email'] ) : '';

	//Headers
	$to       = 'reachus@magnonindia.com';
	$subject  = 'Newslatters';
	$headers  = 'From: Your name <reachus@magnonindia.com>' . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

	//body message
	$message = 'Email: ' . $senderEmail . '';

	//Email Send Function
	$send_email = mail( $to, $subject, $message, $headers );

	echo ( $send_email ) ? '<div class="success alert alert-success text-center rounded-pill mt-2">Sent Successfully.</div>' : '<div class="success alert alert-danger text-center rounded-pill mt-2">Error: Email did not send.</div>';
	exit;
} else {
	echo '<div class="failed alert alert-danger text-center rounded-pill mt-2">Failed: Email not Sent.</div>';
	exit;
}

?>