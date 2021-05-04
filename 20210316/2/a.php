<?php
    $x=$_POST['x'];
    $y=$_POST['y'];
    $opt=$_POST['opt'];
    $ans=0;

    switch ($opt) 
    {
        case '+':
            $ans=$x+$y;
            break;
        case '-':
            $ans=$x-$y;
            break;
        case '*':
            $ans=$x*$y;
            break;
        case '/':
            $ans=$x/$y;
            break;
        default:
            break;
    }
    $res=json_encode($ans);
    echo $res;
?>
    
