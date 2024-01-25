function add(){
    var value1=document.getElementById("value").value;
    document.getElementById("label1").textContent=value1;
}
var a;
function display(){
    if(a==1){
        document.getElementById("hide").style.display="inline ";
         a=0;
    }
    else{
         document.getElementById("hide").style.display="none";
        a=1;
    }
}
var score=0;
function decrease(){
    score= score-10;
    document.getElementById("b").textContent=score;
    
}
function increase(){
    score= score+10;
    document.getElementById("b").textContent=score;
    
}