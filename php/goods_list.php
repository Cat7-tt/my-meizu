<?php
header("content-type:text/html;charset=utf-8");
//建立连接
$link=mysqli_connect('localhost','root','','meizu');
//设置编码
mysqli_set_charset($link,'utf8');
//sql语句
$sql='select * from goods';
//执行sql语句
$result=mysqli_query($link,$sql);
//创建数组存储数据
$ar1=[];
while($row=mysqli_fetch_assoc($result)){
    array_push($ar1,$row);
}
echo json_encode($ar1);
?>