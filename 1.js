square = document.getElementById("square")
field = document.getElementById("field")

function resize(e){
    var key = e.keyCode
    switch(key){
        case 37:
            square.style.animationName = "toRed"
            resizeLeft()
            break
        case 38:
            resizeUp()
            break
        case 39:
            resizeRight()
            break
        case 40:
            resizeDown()
            break
    }
}

function resizeLeft(){
    var width = parseInt(square.offsetWidth)
    if(width > 80){
        square.style.width = (width-5)+"px"
    }
}
function resizeRight(){
    var width = parseInt(square.offsetWidth)
    var maxWidth = parseInt(field.offsetWidth)
    if(width<=maxWidth-5){
        square.style.width = (width+5)+"px"
    }
}
function resizeUp(){
    var height = parseInt(square.offsetHeight)
    if(height > 80){
        square.style.height = (height-5)+"px"
    }
}
function resizeDown(){
    var height = parseInt(square.offsetHeight)
    if(height <= 495){
        square.style.height = (height+5)+"px"
    }
}