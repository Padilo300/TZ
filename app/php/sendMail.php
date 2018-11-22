<?php
    if((isset($_POST['email'])&&$_POST['email']!="")){

        

        $to         = 'email кому отправить' ;
        $subject    = 'тема письма'   ;
        $email      = trim(urldecode(htmlspecialchars($_POST['email'])))    ;



        $message='
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                </body>
            </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: bogdan.moroz96@gmail.com\r\n";

        if (mail($to, $subject, $message, $headers)){ 
            return true;
        } else { 
            return $message  ;
            
        }
    }        