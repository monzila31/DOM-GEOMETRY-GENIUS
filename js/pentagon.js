function calculatePentagonArea(){
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');

    const area = 0.5 * p * b
    setInnerText('pentagon-area', area);
}