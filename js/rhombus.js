function calculateRhombusArea(){
    const width = getInputValue('rhombus-width');
    const length = getInputValue('rhombus-length');

    const area = 0.5 * width * length
    setInnerText('rhombus-area', area);
}