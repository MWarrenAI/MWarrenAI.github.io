<?php

	if(isset($_POST['Send']))
	{
		$name = $_POST['name'];
		$email = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];	
		
		if(empty($name)||empty($Email)||empty($Subject)||empty($Msg))
		{
			header('location:index.php?error');
		}
		else
		{
			$to = "pixel02mark@gmail.com";
			
			if(mail($to,$Subject,$Msg,$Email))
			{
				header("location:index.php?success");
			}
		}
	}

?>