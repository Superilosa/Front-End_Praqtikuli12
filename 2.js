square = document.getElementById("square")
field = document.getElementById("field")
square.style.left = "0px"
square.style.top = "0px"

function moveAround(e){
    var key = e.keyCode
    switch(key){
        case 37:
            moveLeft()
            break
        case 38:
            moveUp()
            break
        case 39:
            moveRight()
            break
        case 40:
            moveDown()
            break
    }
}

function moveLeft(){
    var left = parseInt(square.style.left)
    var top = square.style.top
    if(top=="0px"||top=="420px"){
        if(left > 0){
            square.style.left = (left-5)+"px"
        }
    }
}
function moveRight(){
    var left = parseInt(square.style.left)
    var top = square.style.top
    var maxLeft = (parseInt(field.offsetWidth)-85)
    if(top=="0px"||top=="420px"){
        if(left < maxLeft){
            square.style.left = (left+5)+"px"
        }
    }
}
function moveDown(){
    var left = parseInt(square.style.left)
    var top = parseInt(square.style.top)
    var maxLeft = (parseInt(field.offsetWidth)-85)
    if(left==0||left>=maxLeft){
        if(top<=415){
            square.style.top = (top+5)+"px"
        }
    }
}
function moveUp(){
    var left = parseInt(square.style.left)
    var top = parseInt(square.style.top)
    var maxLeft = (parseInt(field.offsetWidth)-85)
    if(left==0||left>=maxLeft){
        if(top>0){
            square.style.top = (top-5)+"px"
        }
    }
}