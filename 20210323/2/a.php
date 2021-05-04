<?php
    $a=$_POST['a'];
    $b=$_POST['b'];
    $cnt=0;
    $n=array();

    while (true)
    {
        $cnt++;
        if ($a%$cnt==0&&$b%$cnt==0)
            array_push($n,$cnt);
        if($cnt>$a || $cnt>$b)
            break;
    }
    
    $c=max($n);
    $res=array('gcd'=>$c);
    echo json_encode($res);
?>
    
