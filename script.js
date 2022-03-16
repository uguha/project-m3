document.addEventListener("DOMContentLoaded", function(event) {

    let converter = new Converter();

    async function onInputLeft(){
        leftInput.value = converter.formatString(leftInput.value);
        let base = document.querySelector('input[name="radioLeft"]:checked').value;
        let symbol = document.querySelector('input[name="radioRight"]:checked').value;
        let result = await converter.getValue(base, symbol, leftInput.value);
        rightInput.value = result;
        resLeft.innerText = await converter.getValue(base, symbol, 1);
        baseLeftCurrency.innerText = base.toUpperCase();
        symbolLeftCurrency.innerText = symbol.toUpperCase();
        resRight.innerText = await converter.getValue(symbol, base, 1);
        baseRightCurrency.innerText = symbol.toUpperCase();
        symbolRightCurrency.innerText = base.toUpperCase();
    }
    async function onInputRight(){
        rightInput.value = converter.formatString(rightInput.value);
        let base = document.querySelector('input[name="radioRight"]:checked').value;
        let symbol = document.querySelector('input[name="radioLeft"]:checked').value;
        let result = await converter.getValue(base, symbol, rightInput.value);
        leftInput.value =  result;
        resLeft.innerText = await converter.getValue(symbol, base, 1);
        baseLeftCurrency.innerText = symbol.toUpperCase();
        symbolLeftCurrency.innerText = base.toUpperCase();
        resRight.innerText = await converter.getValue(base, symbol, 1);
        baseRightCurrency.innerText = base.toUpperCase();
        symbolRightCurrency.innerText = symbol.toUpperCase();
    }

    document.querySelectorAll('input[name="radioRight"]').forEach((e) => {
        e.onchange = onInputRight;
    });
    document.querySelectorAll('input[name="radioLeft"]').forEach((e) => {
        e.onchange = onInputLeft;
    });

    onInputLeft();

    leftInput.oninput = onInputLeft;
    rightInput.oninput = onInputRight;

});