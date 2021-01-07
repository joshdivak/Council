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

        //Execute query (selects all data)
        $query = "SELECT * FROM `TABLE 1`";
        $qry_result = mysqli_query($con,$query);
        $len = mysqli_num_rows($qry_result);

        echo "<b></b>";

        //make array of cards
        $cards = array();
        for ($i = 0; $i < $len; $i++){
            $row = mysqli_fetch_array($qry_result, MYSQLI_NUM);
            $cards[] = $row;
        }
        
        //visualize what is in the array
        for ($r = 0; $r < $len; $r++) {
            echo "<p><b>Row number $r</b></p>";
            echo "<ul>";
            for ($col = 0; $col < 4; $col++) {
              echo "<li>".$cards[$r][$col]."</li>";
            }
            echo "</ul>";
          }
        
    ?>
    <p>hello <?php echo $cards[0][0]; ?> </p>
    <script type="text/javascript">
        console.log("running script");
        //pass PHP variable declared above to JavaScript variable
        let cards = <?php echo json_encode($cards) ?>;
        console.log(cards);
    </script>
    </body>
</html>