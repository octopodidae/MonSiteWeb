const ANGLE = 45;

let wowpanels = document.querySelectorAll(".wowpanel");
//let colors = ['#4975FB', '#924DE6', '#EF5252', '#F59500'];
let colors = ['#ffc266', '#ff8d71', '#ff5d86', '#ff355d']
//let colors = ['#ffc14c', '#fff166', '#49348d', '#9d7dff']

wowpanels.forEach((element, i) => {
    floatable(element, colors[i]);
});

function floatable(panel, color) {

    let content = panel.querySelector(".content");
    content.style.backgroundColor = color;

    panel.addEventListener('mouseout', e => {
        content.style.transform = `perspective(300px) 
								   rotateY(0deg)
								   rotateX(0deg)`;
    });

    panel.addEventListener('mousemove', e => {
        let w = panel.clientWidth;
        let h = panel.clientHeight;
        let y = (e.offsetX - w * 0.5) / w * ANGLE;
let x = (1 - (e.offsetY - h * 0.5)) / h * ANGLE;

        content.style.transform = `perspective(300px) 
								   rotateX(${x}deg)
								   rotateY(${y}deg)`;
    });

}