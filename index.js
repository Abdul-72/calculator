function show(val){
    var a = document.getElementById("txt")
    a.value += val
}


function clr () {
    var a = document.getElementById("txt")
    a.value = ""
}


function ans () {
    var x = document.getElementById("txt").value
    var y = eval(x)
     document.getElementById("txt").value = y 


}


