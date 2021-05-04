<?php
    $a=$_POST['a'];
    $b=$_POST['b'];
    $c=0;
    for ($i=$a; $i <=$b; $i++) 
    { 
        $c+=$i;
    }
    $res=array('sum'=>$c);
    echo json_encode($res);
?>
    
