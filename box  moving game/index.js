

const box = document.querySelector(".box");
let moveBy = 10;
let leftNum = 0;
let topNum = 0;
window.addEventListener("load", () => {
    box.style.top = '0';
    box.style.left = '0';
});

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case 'ArrowUp':
            box.style.top = parseInt(box.style.top) - moveBy + 'px';
            topNum -=moveBy;
            if(topNum=== -10){
                window.alert("No more area in top");
            }
            break;
        case 'ArrowDown':
            box.style.top = parseInt(box.style.top) + moveBy + 'px';
            topNum +=moveBy;
            break;
        case 'ArrowLeft':
            box.style.left = parseInt(box.style.left) - moveBy + 'px';
            leftNum -=moveBy;
            if(leftNum=== -10){
                window.alert("No more area in left");
            }
            break;
        case 'ArrowRight':
            box.style.left = parseInt(box.style.left) + moveBy + 'px';
            leftNum +=moveBy;
            break;
    }
})

console.log(leftNum)