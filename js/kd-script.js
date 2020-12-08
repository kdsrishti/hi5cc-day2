let colorText = document.getElementById("text-change-color");
let colorTitle = document.getElementById("color-heading");
let colorIndex = 0;
let colorIndexTitle = 0;
let colorsArr = ["#41ead4","#fbff12"," #ff206e"];
let colorsArr2 = ["#41ead4","#ffffff","#fbff12"," #ff206e", "#428EEB"];
function changeColorFn(){
    if(colorIndex > colorsArr.length - 1){
        colorIndex = 0;
    }
    colorText.style.color = colorsArr[colorIndex];
    colorIndex++;   
}

setInterval(changeColorFn, 500);

function changeColorTitleFn(){
    if(colorIndexTitle > colorsArr2.length - 1){
        colorIndexTitle = 0;
    }
    colorTitle.style.color = colorsArr2[colorIndexTitle];
    colorIndexTitle++;   
}

setInterval(changeColorTitleFn, 200);