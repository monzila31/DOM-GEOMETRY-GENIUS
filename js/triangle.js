function calculateTriangleArea(){
    const BaseInput = document.getElementById('triangle-base');
    const baseText = BaseInput.value;
    const base = parseFloat(baseText);

    const heightInput = document.getElementById('triangle-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);

    // calculate

    const area = 0.5 * base * height
    const final = document.getElementById("triangle-area");
    final.innerText = area;
}

function calculateRectiangleArea(){
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);

    // calculate
    const area = width * length
    const final = document.getElementById('rectangle-area');
    final.innerText = area;
}