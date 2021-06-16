<?php

if (isset($_GET['action'])) {
    $action = $_GET['action'];
} else {
    $action = "_no_action";
}

switch ($action) {
    case 'Select':
        require_once "./Select.php";
        $res = Select();
        break;
    case 'Insert':
        require_once "./Insert.php";
        $res = Insert();
        break;
    case 'Delete':
        require_once "./Delete.php";
        $res = Delete();
        break;
    case 'Update':
        require_once "./Update.php";
        $res = Update();
        break;
    default:
        $res['status'] = 404;
        $res['message'] = 'not found';
        break;
}

echo json_encode($res);
