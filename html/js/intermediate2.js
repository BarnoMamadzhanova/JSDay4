

const click = document.getElementById('btn')
const colorChange = document.getElementById('bgcolor')

function clickBtn () {
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    const bgColor = `rgb(${x}, ${y}, ${z})`;
    colorChange.style.backgroundColor = bgColor;
}

click.addEventListener('click', clickBtn)