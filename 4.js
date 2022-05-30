square = document.getElementById("square")
field = document.getElementById("field")

function mouseSquare(e){
    var border = field.getBoundingClientRect()
    var x = e.clientX - border.left
    var y = e.clientY - border.top
    square.style.left = x+"px"
    square.style.top = y+"px"
}