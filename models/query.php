<?php
    class Query{
        private $connect;
        private $bookId;
        private $bookOwnerId;
        private $bookName;
        private $bookDescription;
        private $bookAbout;
        private $bookDeleted;
        private $bookCreateAt;
        private $bookUpdateAt;
        private $bookIsNew;
        private $bookIsHot;
        private $bookAuthorId;

        public function __construct($db){
            $this->connect =$db;
        }

        public function getBookDetail($bookId){
            $query="select id,ownerId,name,description,about,deleted,createAt,updateAt,isNew,isHot,authorId from books where id =?";
            $stmt=$this->connect->prepare($query);
            $stmt->bindParam(1,$bookId);
            $stmt->execute();

            $row=$stmt->fetch(PDO::FETCH_ASSOC);

            $this->bookId = $row['id'];
            $this->bookOwnerId=$row['ownerId'];
            $this->bookName = $row['name'];
            $this->bookDescription = $row['description'];
            $this->bookAbout = $row['about'];
            $this->bookDeleted = $row['deleted'];
            $this->bookCreateAt = $row['createAt'];
            $this->bookUpdatedAt = $row['updateAt'];
            $this->bookIsNew=$row['isNew'];
            $this->bookIsHot = $row['isHot'];
            $this->bookAuthorId = $row['authorId'];

            $query_item=array(
                'id'=>$this->bookId,
                'ownerId'=>$this->bookOwnerId,
                'name'=>$this->bookName,
                'description'=>$this->bookDescription,
                'about'=>$this->bookAbout,
                'deleted'=>$this->bookDeleted,
                'createAt'=>$this->bookCreateAt,
                'updateAt'=>$this->bookUpdateAt,
                'isNew'=>$this->bookIsNew,
                'isHot'=>$this->bookIsHot,
                'authorId'=>$this->bookAuthorId,
                
            );
            return $query_item;
        }
    }