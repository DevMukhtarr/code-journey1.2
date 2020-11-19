
handleClick = () =>{
    let theD = document.getElementById('circle')
    let colors = [ 'fuchsia','white','blue','red','black'];
    let realCo = window.getComputedStyle(theD).backgroundColor;

    if(realCo === "rgb(255, 255, 0)"){
        document.getElementById('circle').style.background = "rgb(200,134, 245)";
    }else {
        document.getElementById("circle").style.background = "rgb(255, 255, 0)";
    }
    if(realCo === "rgb(200, 134, 245)"){
        document.getElementById('circle').style.background = colors[2];
    }
    if(realCo === "rgb(0,0, 255)"){
        document.getElementById('circle').style.background = colors[4];
    }
}