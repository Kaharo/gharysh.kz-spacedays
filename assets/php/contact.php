<?php

	$form_data = [];

	$fname        	= $_POST['fname'];
	$lname        	= $_POST['lname'];
	$mname        	= $_POST['mname'];
	$positiom      	= $_POST['position'];
	$email        	= $_POST['email'];
	$cell        	= $_POST['cell'];
	$country   		= $_POST['country'];
	$organization   = $_POST['organization'];
	$occupation 	= $_POST['occupation'];
	$additional 	= $_POST['additional'];

	$message     	= "First Name: $fname, \nLast Name: $lname, \nMiddle Name: $mname, 
						\nEmail: $email, \nCell: $cell, \nCountry: $country, \nOrganization: $organization, 
						\nOccupation: $occupation, \nadditional: $additional.";

	if(mail('spacedays@gmail.com', "Registartion for Space days 2016", $message))
		$form_data['success'] = true;
	else
		$form_data['success'] = false;

	echo json_encode($form_data);
	return;
?>