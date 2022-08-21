<?php
    class Query{
        private $connect;

        public function __construct($db){
            $this->connect =$db;
        }
    }