<?php
	$dbhost = "localhost";
	$dbuser = "gametrai_megan";
	$dbpass = "play2learn";
	$dbname = "gametrai_flexdecks";
	//Connect to MySQL Server
	$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
	if (mysqli_connect_errno()) {
		echo "Could  not connect to database: Error: ".mysqli_connect_error();
    exit();
	}

	//Execute query
	$query = "SELECT Cards.* FROM Cards ORDER BY ID";
	$qry_result = mysqli_query($con,$query);

	$row = mysqli_fetch_array($qry_result);
	$ID = $row['ID'];
	$NAME = $row['CardDescription'];
	
	echo "<html><head></head><body><p>";
    echo $ID . " " . $NAME;
    echo "<script src=test.js></script>";
	echo "</p></body></html>";
?>