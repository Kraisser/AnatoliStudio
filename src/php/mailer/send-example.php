<?php
require './PHPMailer.php';
require './SMTP.php';
require './Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['message'];

// Формирование самого письма
$title = "Заявка с сайта";
$body = "
<h2>Новая заявка с сайта сreativeanatolistudio.com</h2>
<b>Имя отправителя:</b> $name<br>
<b>Почта для связи:</b> $email<br><br>
<b>Сообщение:</b><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'mailbe03.hoster.by'; // SMTP сервера вашей почты
    $mail->Username   = 'no-reply@creativeanatolistudio.com'; // Логин на почте
    $mail->Password   = '137234Anatoli'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('no-reply@creativeanatolistudio.com', 'no-reply Contact form'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('vgaiko@mail.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);