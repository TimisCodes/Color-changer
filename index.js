const colorSaved = ["red","green","blue","yellow","purple"];
var selectAll = document.querySelector("button");


function buttonClicked(){

    var randomColor = Math.random() * 5;

    var randomColorFloor = Math.floor(randomColor);

    var clickedColor = colorSaved[randomColorFloor];

    document.querySelector("span").innerHTML = clickedColor;
    document.body.style.backgroundColor = clickedColor;
    document.querySelector("span").style.color = clickedColor;

    console.log(clickedColor);
    
    // if(clickedColor === colorSaved[0] && clickedColor === colorSaved[0] ){
    //     document.body.style.backgroundColor = "red";
    //     document.querySelector("span").style.color = "red";
    // }
    // else if(clickedColor === colorSaved[1]){
    //     document.body.style.backgroundColor = "green";
    //     document.querySelector("span").style.color = "green";
    // }
    // else if(clickedColor === colorSaved[2]){
    //     document.body.style.backgroundColor = "blue";
    //     document.querySelector("span").style.color = "blue";
    // }
    // else if(clickedColor === colorSaved[3]){
    //     document.body.style.backgroundColor = "yellow";
    //     document.querySelector("span").style.color = "yellow";
    // }
    // else if(clickedColor === colorSaved[4]){
    //     document.body.style.backgroundColor = "purple";
    //     document.querySelector("span").style.color = "purple";
    // }
}


