<!DOCTYPE html>
<html>
    <head></head>
    <body>
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
        
        echo $ID . " " . $NAME;
        echo "<script>console.log($ID)</script>";
    ?>
    <p>hello<?php echo $row['CardType'] ?></p>
    <script src=test.js>js_ID = "<?php echo $ID; ?>";
        console.log(js_ID);
        console.log(convert(js_ID));</script>
    </body>
</html>