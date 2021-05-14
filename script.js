i = 0
function la(){
    console.log("bookmark starting");
    let paragraf = document.getElementsByTagName('p');
    paragraf[i].innerHTML = "sayang mami";
    paragraf[i].style.color = "yellow";
    paragraf[i].style.backgroundColor = "black";
    i++;
}