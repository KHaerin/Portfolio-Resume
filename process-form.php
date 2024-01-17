<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Process the form data as needed (e.g., send an email, store in a database, etc.)

  $mailheader = "From:" .$name."<".$email.">\r\n";
  $recipient = "coleuyan55@gmail.com";

  mail($recipient, $subject, $message, $mailheader) or die("Error!r");

  echo'
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="contact.css">
    <link rel="icon" type="image/png" href="homeimg/laptop.png" sizes="30x30">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <title>Contact</title>
  </head>
    <body>
      <div class="contact">
        <!-- START MENU BAR -->
        <div class="header">
          <div class="titlename">COLE UYAN</div>
          <div class="menu">
            <a href="index.html" class="menu-txt">Home</a>
            <a href="about.html" class="menu-txt">About</a>
            <a href="project.html" class="menu-txt">Project</a>
            <a href="contact.html" class="menu-txt">Contact</a>
          </div>
        <!-- END MENU BAR -->
      </div>
  
       <!-- FORM -->
      
        <div class="form">
          
        <h1>Thank you for contacting me. I will get back to you as soon as possible!</h1>
        <p>xd xd xd xd xd xd xd xd xd xd xd xd</p>
          
          <img src="contactlego.png" alt="" id="contactlego">
            
       </div>
    </div>
    </body>
  </html>
    
   ';
}
?>