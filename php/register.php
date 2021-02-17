<?php
header("content-type:text/html;charset=utf-8");
 //连接数据库
 $link=mysqli_connect('localhost','root','','meizu');
 //设置编码
 mysqli_set_charset($link,'utf8');
  //获取参数
  $a=$_GET['account'];
  $p=$_GET['password'];
  //sql语句
  $sql="insert into user (account,password) values ('$a','$p')";
  //执行sql语句
  $result=mysqli_query($link,$sql);
  if($result){
      echo 1;
  }else{
      echo 0;
  }
?>