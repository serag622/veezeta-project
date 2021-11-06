var line =document.getElementById("line");
var left= document.getElementById("left");
var right= document.getElementById("right");
var input= document.getElementById("input");

left.onclick=()=>{
  line.style.transform="translateX(-100%)"
}
right.onclick=()=>{
    line.style.transform="translateX(0px)"

}
input.onfocus=()=>{
  input.style="outline:0px"
} 