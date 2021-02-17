<?php
   header('content-type:text/html;charset=utf-8');
   //连接数据库
   $link=mysqli_connect('localhost','root','','meizu');
   //设置编码
   mysqli_set_charset($link,'utf8');

   //获取参数
   $a=$_GET['account'];
   $p=$_GET['password'];
   //sql语句
   $sql="select * from user where account='$a' and password='$p'";
   //执行sql语句
   $result=mysqli_query($link,$sql);
   //判断结果集中的数据是否存在
   if(mysqli_fetch_assoc($result)){
      echo 1;
   }else{
      echo 0;
   }
?>