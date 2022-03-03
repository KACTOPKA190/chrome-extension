const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
    const input_range = inputUpper - inputLower;
    const output_range = outputUpper - outputLower;
    return value => outputLower + (((value - inputLower) / input_range) * output_range || 0);
}
  
const eyes = document.querySelector('.fox-eyes')

const bound = 20;
const update = ({ x, y }) => {
    const pos_x = mapRange(0, window.innerWidth, -bound, bound)(x);
    const pos_y = mapRange(0, window.innerHeight, -bound, bound)(y);
    eyes.style.setProperty('--x', pos_x/5);
    eyes.style.setProperty('--y', pos_y/5);  
}

document.addEventListener('pointermove', update);
let x = document.getElementById("instruction-btn-border");
x.addEventListener('mouseout', function() {
    document.getElementById("instruction-btn-border").classList.add("ggh");
    document.getElementById("instruction-btn-border").classList.remove("ggg");
}); 

x.addEventListener('mouseover', function() {
    document.getElementById("instruction-btn-border").classList.remove("ggh");
    document.getElementById("instruction-btn-border").classList.add("ggg");
}); 