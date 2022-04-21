// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'



function render(){
    let c = document.querySelector('canvas')
    
    if(c.getContext){
        let ctx = c.getContext('2d')
        ctx.clearRect(0, 0, 600, 400)
        if(document. getElementById('start'). checked){
            ctx.fillStyle = document.getElementById('r').value
            ctx.fillRect(50, document.getElementById('y').value, 60, 30)

            ctx.fillStyle = document.getElementById('c').value
            ctx.beginPath()
            ctx.arc(document.getElementById('x').value, 200, 75, 0, 2 * Math.PI, true)
            ctx.fill()
            
        }
    }
}

document.getElementById('start').onchange = render
document.getElementById('x').onchange = render
document.getElementById('c').onchange = render
document.getElementById('y').onchange = render
document.getElementById('r').onchange = render
document.body.onload = render


let k = 0 
while(k< 3){    
    for(let i = 0; i < document.getElementById('boxes').value; i++){
        let r = Math.random()
        if(r < .5){
            document.write('<div class="B box"></div>') 
        }
        else{
            document.write('<div class="R box"></div>')
        }
    }
    k++
}


document.body.onload = box




