<?php
    include_once '../config/db.php';
    include_once '../models/query.php';

    $bookId=$_GET['id'];

    $db=new db();
    $connect=$db->connect();

    $query=new Query($connect);
    $bookDetail=$query->getBookDetail($bookId);
    echo json_encode($bookDetail);