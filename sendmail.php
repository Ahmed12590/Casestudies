<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $work = htmlspecialchars($_POST['work']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
       
        
        $mail->isSMTP();
        $mail->Host       = 'smtp.yourdomain.com';  // <-- apne hosting ka SMTP server likho
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@yourdomain.com';  
        $mail->Password   = 'YOUR_EMAIL_PASSWORD';  
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587; 

        //  Sender & Receiver
        $mail->setFrom('info@yourdomain.com', 'Elevencoders'); 
        $mail->addAddress('info@yourdomain.com', 'Admin');     
        $mail->addReplyTo($email, "$first_name $last_name");

        // Email content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission from $first_name $last_name";
        $mail->Body    = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> $first_name $last_name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Interested In:</strong> $work</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        // Send the email
        $mail->send();
        echo "<script>alert('Message sent successfully!'); window.location.href='thank-you.html';</script>";

    } catch (Exception $e) {
        echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}'); window.history.back();</script>";
    }
}
?>




