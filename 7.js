pointer = document.getElementById("pointer")
field = document.getElementById("field")
pointer.style.left = "0px"

active = false

function arrows(e){
    var key = e.keyCode
    switch(key){
        case 37:
            arrowLeft()
            break
        case 39:
            arrowRight()
            break
    }
}

function arrowLeft(){
    var left = parseInt(pointer.style.left)
    console.log(left)
    if(left>0){
        pointer.style.left = (left-3)+"px"
    }
}
function arrowRight(){
    var left = parseInt(pointer.style.left)
    console.log(left)
    if(left<290){
        pointer.style.left = (left+3)+"px"
    }
}

function movePointer(e){
    if(active){
        var border = field.getBoundingClientRect()
        var x = e.clientX - border.left
        if(x>=0&&x<=290){
            pointer.style.left = x+"px"
        }
    }
}