square = document.getElementById("square")
field = document.getElementById("field")

arrowL = false
arrowR = false
arrowU = false
arrowD = false

function move(e){
    var key = e.keyCode
    switch(key){
        case 37:
            arrowL = true
            break
        case 38:
            arrowU = true
            break
        case 39:
            arrowR = true
            break
        case 40:
            arrowD = true
            break
    }
    if(!(arrowL&&arrowR)&&!(arrowU&&arrowD)){
        if(arrowL&&arrowU){
            moveLeft();
            moveUp();
        }else if(arrowL&&arrowD){
            moveLeft();
            moveDown();
        }else if(arrowR&&arrowU){
            moveRight();
            moveUp();
        }else if(arrowR&&arrowD){
            moveRight();
            moveDown();
        }else if(arrowL){
            moveLeft();
        }else if(arrowU){
            moveUp();
        }else if(arrowR){
            moveRight();
        }else if(arrowD){
            moveDown();
        }
    }
}

function moveLeft(){
    var left = parseInt(square.style.left)
    if(left>0){
        square.style.left = (left-5)+"px"
    }
}
function moveUp(){
    var top = parseInt(square.style.top)
    if(top>0){
        square.style.top = (top-5)+"px"
    }
}
function moveRight(){
    var left = parseInt(square.style.left)
    maxLeft = parseInt(field.offsetWidth)-85
    if(left<maxLeft){
        square.style.left = (left+5)+"px"
    }
}
function moveDown(){
    var top = parseInt(square.style.top)
    if(top<=415){
        square.style.top = (top+5)+"px"
    }
}

function clearBools(e){
    var key = e.keyCode
    switch(key){
        case 37:
            arrowL = false
            break
        case 38:
            arrowU = false
            break
        case 39:
            arrowR = false
            break
        case 40:
            arrowD = false
            break
    }
}