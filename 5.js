output = document.getElementById("output")

single = false

function setOneClick(){
    single=true
    setTimeout(singleClick,300)
}

function singleClick(){
    if(single){
        output.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"
    }
}
function doubleClick(){
    single = false
    output.style.color = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"
}