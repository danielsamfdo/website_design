<?php $phpArray = array(
          0 => 001-1234567, 
          1 => 1234567, 
          2 => 12345678, 
          3 => 12345678,
          4 => 12345678,
          5 => 'AP1W3242',
          6 => 'AP7X1234',
          7 => 'AS1234',
          8 => 'MH9Z2324', 
          9 => 'MX1234', 
          10 => 'TN1A3242',
          11 => 'ZZ1234'
    )
?>
<html>
<script type="text/javascript">

    var jArray= <?php echo json_encode($phpArray ); ?>;

    for(var i=0;i<12;i++){
        alert(jArray[i]);
    }

 </script>
 </html>