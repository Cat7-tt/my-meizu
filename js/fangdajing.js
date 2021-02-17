class Glass{
    constructor(box1){
        this.box=box1
        //获取大盒子中需要操作的对象
        this.leftBox=this.box.querySelector('.leftBox')
        this.mark=this.box.querySelector('.mark')
        this.rightBox=this.box.querySelector('.rightBox')
        this.rigthImg=this.rightBox.querySelector('img')
        this.move()
    }

    move(){
        // console.log(this)
        //给左边的盒子绑定鼠标移入、移出、移动事件
        this.leftBox.onmouseover=(e)=>{
            var e = e || window.event
            //显示对应的盒子对象
            this.mark.style.display='block'
            this.rightBox.style.display='block'
        }

        this.leftBox.onmousemove=(e)=>{
            //获取移动距离
            var x1=e.pageX-this.leftBox.offsetLeft-parseInt(this.mark.offsetWidth/2)
            var y1=e.pageY-this.leftBox.offsetTop-parseInt(this.mark.offsetHeight/2)
            //设置移动范围
            var minX=0
            var minY=0
            var maxX=this.leftBox.offsetWidth-this.mark.offsetWidth
            var maxY=this.leftBox.offsetHeight-this.mark.offsetHeight
            //设置右边图片的移动距离
            var tempX
            var tempY

            //水平移动
            if(x1<minX){
                this.mark.style.left=minX+'px'
                tempX=minX
            }else if(x1>maxX){
                this.mark.style.left=maxX+"px"
                tempX=maxX
            }else{
                this.mark.style.left=x1+'px'
                tempX=x1
            }
            //垂直移动
            if(y1<minY){
                this.mark.style.top=minY+'px'
                tempY=minY
            }else if(y1>maxY){
                this.mark.style.top=maxY+'px'
                tempY=maxY
            }else{
                this.mark.style.top=y1+'px'
                tempY=y1
            }

            //移动右边图片对象
            this.rigthImg.style.left=-2*tempX+'px'
            this.rigthImg.style.top=-2*tempY+'px'
        }

        this.leftBox.onmouseout=(e)=>{
             //隐藏对应的盒子对象
            this.mark.style.display='none'
            this.rightBox.style.display='none'
        }
    }
}