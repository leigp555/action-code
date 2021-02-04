let html = document.querySelector("#html")
let style = document.querySelector("style")
let string = `
/*今天天气真不错
不知道明天会怎么样
加个样式*/
#demo{
    border:1px solid red;
    width:400px;
    height:400px
}
/*接下来把demo变成八卦图
首先把demo变成一个圆圈*/
#demo{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none
}
/*一黑一白*/
#demo{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
     rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个小球*/
#demo::before{
    width:200px;
    height:200px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background-color:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%,rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
#demo::after{
    width:200px;
    height:200px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background-color:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}

`
let string2 = ``;
let n = 0;

function step() {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 = string2 + '<br>'+ '&nbsp;'+ '&nbsp';
          
            console.log(string2)
        } 
        else {
            string2 = string2 + string[n]
          

        }
        if (n + 2 <= string.length) {
                step()
        } 
        
        n = n + 1
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0,200)
       
    }, 10)
    
}
step()