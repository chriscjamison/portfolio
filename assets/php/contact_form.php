<?php
  $to      = 'chris@chriscjamison.com';
  $subject = "Message from " . $_POST["full_name"] . ", sent from chriscjamison.com";
  $message = 
    "From: " . $_POST["full_name"] . "\n\n" . 
    "Email Address: " . $_POST["email_address"] . "\n" . 
    "Message: " . "\n" . $_POST["message"];
  $headers = 'From: no_reply@chriscjamison.com' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);

  $to = $_POST["email_address"];
  $subject = "You sent a message to Chris Jamison";
  $message = "Hey, " . $_POST["full_name"] . ".\n\n" . "Thank you so much for viewing my portfolio and sending your message. \n\n" . 
             "I will read your message and get back to you no later than one business day from today. \n\n" . 
             "There is a copy of the message you sent to me below.\n\n" . 
             "\"" . $_POST["message"] . "\"\n\n" . 
             "Thanks you again for reaching out to me. I look forward to meeting you in some form soon. \n\n" .
             "Chris Jamison";
  $headers = "From: noreply@chriscjamison.com" . "\r\n" . 
             "X-Mailer: PHP/" . phpversion(); 

  mail($to, $subject, $message, $headers);
?>

<html>
  <script>window.location.href = "http://chriscjamison.com/start_a_conversation.htm#confirmation";</script>
</html>