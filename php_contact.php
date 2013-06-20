<?php
// Receive form's subject value into php $subject variable
$subject =$_REQUEST['subject'];

// Receive form's message value into php $message variable
$message=$_REQUEST['message'];

// Receive form's sender name value into php $sender variable
$sender=$_REQUEST['name'];

// Receive form's user email value into php $user_email variable
$user_email=$_REQUEST['user_email'];

// the email address where the message will be sent
$TO ="nagashree.aswath@strata.co.in";

$send_email=mail($TO,$subject,$message,"From: ".$sender."<".$user_email.">");
echo $user_email;
echo $send_email;
// To check email has been sent or not
if($send_email)
  {
  echo "Your E-mail has been sent !";
  echo $send_email;
  header( 'Location: index.html' ) ;
  }
   else
   {
   echo "E-mail sent was failed !";
   echo $send_email;
     header( 'Location: customers.html' ) ;
   }
?>