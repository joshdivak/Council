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
        $query = "SELECT * FROM `TABLE 1`";
        $qry_result = mysqli_query($con,$query);

        $row = mysqli_fetch_array($qry_result);
        $TITLE = $row['Title'];
        $CONTENT = $row['Content'];
        
        echo $TITLE . " " . $CONTENT;
    ?>
    <p>hello<?php echo $row['CardType'] ?></p>
    <script type="text/javascript">
        console.log("running script");
        // pass PHP variable declared above to JavaScript variable
        var ar = <?php echo json_encode($row) ?>;
        console.log(ar);
    </script>
    </body>
</html>