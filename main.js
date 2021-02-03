let html = document.querySelector("#html")
let style = document.querySelector("style")
let string = `
/*今天天气真不错
不知道明天会怎么样
加个样式*/
body{
    color:red;
}`
let string2 = ``;
let n = 0;

function step() {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 = string2 + '<br>';
          
            console.log(string2)
        } else if (string[n] === "") {
            string2 = string2 + '$nbsp';  
        }
        else {
            string2 = string2 + string[n]
          

        }
        if (n + 2 <= string.length) {
                step()
        } else {
                
        }
        
        n = n + 1
        html.innerHTML = string2
        style.innerHTML= string.substring(0,n)
       
    }, 100)
    
}
step()