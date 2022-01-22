<?php
$router->register('getAccount', 'Account', 'getAccount'); //1 2
$router->register('updateAccount', 'Account', 'updateAccount'); //1 2

$router->register('getClassDatas', 'ClassData', 'getClassDatas'); //1 2

// 1=老師2=學生
$router->register('getClasses', 'Teacher', 'getClasses'); //1 
$router->register('newClassData', 'Teacher', 'newClassData'); //1 
$router->register('removeClassData', 'Teacher', 'removeClassData'); //1 
$router->register('updateClassData', 'Teacher', 'updateClassData'); //1 
$router->register('getClassHomework', 'Teacher', 'getClassHomework'); //1 
$router->register('gerRecordsByCid', 'Teacher', 'gerRecordsByCid'); //1 
$router->register('UpdateMidtern', 'Teacher', 'UpdateMidtern'); //1 
$router->register('UpdateFinal', 'Teacher', 'UpdateFinal'); //1 


$router->register('getlectureList', 'lecture', 'getlectureList'); //1 2 
$router->register('getlectureFile', 'lecture', 'getlectureFile'); //1 2 
$router->register('newlecture', 'lecture', 'newlecture'); //1 
$router->register('removelecture', 'lecture', 'removelecture'); //1 
$router->register('Updatelecture', 'lecture', 'Updatelecture'); //1 


$router->register('getClasshomeworks', 'Classhomework', 'getClasshomeworks'); //1 2      
$router->register('newClasshomework', 'Classhomework', 'newClasshomework'); //1 
$router->register('removeClasshomework', 'Classhomework', 'removeClasshomework'); //1 
$router->register('updateClasshomework', 'Classhomework', 'updateClasshomework'); //1 
$router->register('getChooseList', 'Student', 'getChooseList'); //2 
$router->register('ChooseClass', 'Student', 'ChooseClass'); //2 
$router->register('getChooseed', 'Student', 'getChooseed'); //2 
$router->register('removeChoose', 'Student', 'removeChoose'); //2 
$router->register('getTranscript', 'Student', 'getTranscript'); //2 

$router->register('newHandHomework', 'HandHomework', 'newHandHomework'); //2 
$router->register('getHandHomeworkList', 'HandHomework', 'getHandHomeworkList'); //1 2 
$router->register('getHomeworkFile', 'HandHomework', 'getHomeworkFile'); //1 2 
$router->register('removeHomework', 'HandHomework', 'removeHomework'); // 2 
$router->register('UpdatehomeworkScore', 'HandHomework', 'UpdatehomeworkScore'); //1