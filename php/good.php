<?php
  header('content-type:text/html;charset=utf-8');
  //建立连接
  $link=mysqli_connect('localhost','root','','meizu');
   //获取参数
  $id=$_GET['id'];
  //设置编码
  mysqli_set_charset($link,'utf8');
  //sql语句
  // $sql='select * from goods';  //不传参
  $sql="select * from goods where id=$id";
  //执行sql语句
  $result=mysqli_query($link,$sql);
  //返回结果集
  $row=mysqli_fetch_assoc($result);
  // echo eval('('+$row+')');
  echo json_encode($row);

?>