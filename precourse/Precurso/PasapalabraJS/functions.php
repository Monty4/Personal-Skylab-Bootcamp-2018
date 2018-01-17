<?php
include ("connections/connections.inc.php");
function carga_metas($menu,$meta){
    global $da;
    global $data;
    global $xml;
    global $lang;
    $menu = strtoupper($menu);
    
    // Si estamos en la página de inicio -> cargamos los metas de General
    if ($menu == 'INICIO'){
        $mensaje = $xml->GENERAL;
        switch ($meta){
            case 'description':
            $text = strtoupper($lang).'_DESCRIPTION';
            break;
            
            case 'keyword':
            $text = strtoupper($lang).'_KEYWORDS';
            break;
            
            case 'author':
            $text = strtoupper($lang).'_AUTHOR';
            break;
            
            case 'robot':
            $text = strtoupper($lang).'_ROBOTS';
            break;
        }
        $texto = $mensaje->$text;
    }
    // Si estamos en cualquier otro men? .....
    else{
        $mensaje_1 = $xml->GENERAL;
        $mensaje_2 = $xml->$menu;
        switch ($meta){
            case 'description':
            $text = strtoupper($lang).'_DESCRIPTION';
            $texto = $mensaje_2->$text;
            // Si no está definida la variable $texto porque estamos en un submen? -> cogemos la descripción de la p?gina de inicio
            if (!isset($texto)) $texto = $mensaje_1->$text;
            break;
            
            case 'keyword':
            // Cogemos las keywords de inicio mÃ¡s las del menÃº
            $text = strtoupper($lang).'_KEYWORDS';
            $texto = $mensaje_1->$text.', '.$mensaje_2->$text;
            break;
            
            case 'author':
            $text = strtoupper($lang).'_AUTHOR';
            $texto = $mensaje_1->$text;
            break;
            
            case 'robot':
            $text = strtoupper($lang).'_ROBOTS';
            $texto = $mensaje_1->$text;
            break;
        }
    }
    return $texto;
}
function carga_imagenes(){
    global $da;
    global $data;
    global $xml;
    
    $cont = 0;
    foreach ($xml->IMAGE as $men){
        $cont++;
        echo '<img id="img'.$cont.' src="/images/'.$men->URL.'"';
        //echo $men->URL;
    }
}
/*
function envio_mail(){
	global $nombre_contacto;
    global $telefono_contacto;
    global $correo_contacto;
    global $comentarios_contacto;
	try {
  		include("includes/class.phpmailer.php"); 
  
  		$mail = new phpmailer();
  		$mail->Mailer = "smtp";
  
  		$mail->IsSMTP();
  		$mail->Host = "82.197.131.36"; // i-sistem
  		$mail->SMTPAuth = false;
  		$mail->Username = "";
  		$mail->Password = "";
  
  		$mail->From = "info@personal.com";
  		$mail->FromName = "Formulario Web Personal";
  
  		$mail->AddAddress("mmontalban_leon@hotmail.com");

  		$mail->Subject = "Solicitud de información desde web";    

  		$mail->IsHTML(true);

  		//Definimos AltBody por si el destinatario del correo no admite email con formato html 
  
  		$szStyle = "style='font-family: Verdana, Arial;font-size:12px;color:#333333;font-align:left'";
  		$szStyle_titulos = "style='font-family: Verdana, Arial;font-weight:bold;font-size:12px;color:#000000;width:200px'";
  		$szBody = "<table width='600px' cellpadding='5' cellspacing='0'>";
  		$szBody .= "<tr><td colspan='2' ".$szStyle_titulos.">Solicitud de información</td></tr>";
  		$szBody .= "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>";  
  		$szBody .= "<tr><td ".$szStyle_titulos.">Nombre:</td><td ".$szStyle.">".utf8_decode($_REQUEST["nombre_contacto"])."</td></tr>";
  		if(isset($_REQUEST["empresa_contacto"]))$szBody .= "<tr><td ".$szStyle_titulos.">Empresa</td><td ".$szStyle.">".utf8_decode($_REQUEST["empresa_contacto"])."</td></tr>";
  		if(isset($_REQUEST["telefono_contacto"]))$szBody .= "<tr><td ".$szStyle_titulos.">Teléfono</td><td ".$szStyle.">".$_REQUEST["telefono_contacto"]."</td></tr>";
  		$szBody .= "<tr><td ".$szStyle_titulos.">Email</td><td ".$szStyle.">".utf8_decode($_REQUEST["correo_contacto"])."</td></tr>";
  		if(isset($_REQUEST["poblacion_contacto"]))$szBody .= "<tr><td ".$szStyle_titulos.">Población</td><td ".$szStyle.">".utf8_decode($_REQUEST["poblacion_contacto"])."</td></tr>";
  		if(isset($_REQUEST["comentarios_contacto"]))$szBody .= "<tr><td ".$szStyle_titulos.">Comentarios</td><td ".$szStyle.">". utf8_decode($_REQUEST["comentarios_contacto"]) ."</td></tr>";
  		$szBody .= "</table>";
  		$mail->Body = $szBody;   
  		$mail->AltBody = "Solicitud de información";

  		//se envia el mensaje, si no ha habido problemas 
  		//la variable $exito tendra el valor true
  		$exito = $mail->Send();

  		//Si el mensaje no ha podido ser enviado se realizaran 4 intentos mas como mucho 
  		//para intentar enviar el mensaje, cada intento se hara 5 segundos despues 
  		//del anterior, para ello se usa la funcion sleep    
  		$intentos=1; 
   		while ((!$exito) && ($intentos < 5)) {
			sleep(5);
        	$exito = $mail->Send();
        	$intentos= $intentos + 1;    
   		}
     
   		if(!$exito){
       		echo "<div class='error_form' >No se ha podido enviar el correo</div>";
   		}
   		else{                   
       		echo "<div class='ok_form'>Mensaje enviado correctamente</div>";
   		}
	}
	catch (exception $e){
		echo $e->getMessage();
	}
}
*/

function envio_mail($nombre, $telefono, $correo, $comentarios){
	//global $nombre_contacto;
    //global $telefono_contacto;
    //global $correo_contacto;
    //global $comentarios_contacto;

	$consulta = "Nombre:\r\n".$nombre;
	$consulta .= "\r\n\r\nTelefono:\r\n".$telefono;
	$consulta .= "\r\n\r\nCorreo:\r\n".$correo;
	$consulta .= "\r\n\r\nConsulta:\r\n".$comentarios;
	//$cabeceras = $nom . "\r\n";
	$envio = @mail ('mmontalban_leon@hotmail.com','Consulta Web',$consulta);
	
	echo $nombre;
	//if ($envio) $mensaje_envio = $envio_correcto;
	//else $mensaje_envio = $envio_incorrecto;
}

function guardar_consulta($nombre, $telefono, $correo, $comentarios){
	$data = date('Y-m-d');
	$con_consulta = "INSERT INTO contacto (fecha, nombre, telefono, mail, consulta, leido) VALUES ('$data', '$nombre', '$telefono', '$correo', '$comentarios', 'no')";
	$res_consulta = mysql_query($con_consulta);
	return true;
}

function contador($valor){
	//include ("connections/connections.inc.php");
	switch ($valor){
		case 'visita':
		$con_visitas = "SELECT NumeroVisitas FROM nvisitas";
		$res_visitas = mysql_fetch_row(mysql_query($con_visitas));
		$visitas = $res_visitas[0];
		$visitas++;
		
		$con_update_nvisitas = "UPDATE nvisitas SET NumeroVisitas='$visitas'";
		$res_update_nvisitas = mysql_query($con_update_nvisitas);
	
		$data = date('Y-m-d');
		$hora = date('H:i:s');
		
		list ($horas, $minutos, $segundos) = split('[:]', $hora);
		if ($horas == 23) $horas = 00;
		else $horas++;
		$time = $horas.':'.$minutos;
		
		$con_update_visitas = "INSERT INTO visitas (Fecha, Hora) VALUES ('$data','$time')";
		$res_update_visitas = mysql_query($con_update_visitas);
		break;
		
		case 'visita_cv':
		$con_visitas_cv = "SELECT NumeroVisitas FROM nvisitas_cv";
		$res_visitas_cv = mysql_fetch_row(mysql_query($con_visitas_cv));
		$visitas_cv = $res_visitas_cv[0];
		$visitas_cv++;
		
		$con_update_nvisitas_cv = "UPDATE nvisitas_cv SET NumeroVisitas='$visitas_cv'";
		$res_update_nvisitas_cv = mysql_query($con_update_nvisitas_cv);
	}
}
?>
