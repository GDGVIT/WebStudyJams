var createdTime;
var clickedTime;
var reactionTime;
function getRandomColors(){
    var code = '0123456789ABCDEF'.split('');
    var color = '#';
    for(var i=0; i<6; i++){
        color += code[Math.round(Math.random()*15)];
    }
    console.log(color);
    return color;
}
function createElement(){
    var time = Math.random();
    time = time*3000;
    setTimeout(function(){
        if(Math.random() > 0.5){
        document.getElementById("element").style.borderRadius = "50%";
        }
        else{
            document.getElementById("element").style.borderRadius = "0";
        }
    document.getElementById("element").style.backgroundColor = getRandomColors();
    var top = Math.random()*500;
    var left = Math.random()*700;
    document.getElementById("element").style.top =top +"px";
    document.getElementById("element").style.left =left+"px";
    document.getElementById("element").style.display="block";
    createdTime=Date.now();
    },time);        
}

document.getElementById("element").onclick = function(){
    clickedTime=Date.now();
    reactionTime=(clickedTime-createdTime)/1000;
    document.getElementById("time").innerHTML=reactionTime;
    document.getElementById("element").style.display="none";
    createElement();
}
createElement();

