let a = 0 ;
document.getElementById("heading").textContent = a ;


document.getElementsByClassName("box1")[0].onclick = function(){
    a -= 1 ;
    document.getElementById("heading").textContent = a ;
}

document.getElementsByClassName("box2")[0].onclick = function(){
    a = 0 ;
    document.getElementById("heading").textContent = a ;
}

document.getElementsByClassName("box3")[0].onclick = function(){
    a += 1 ;
    document.getElementById("heading").textContent = a ;
}