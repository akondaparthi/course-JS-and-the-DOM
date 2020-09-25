// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(gridHeight, gridWidth) {

    const testTable  =  document.createElement('table');
    const testID =  document.getElementById("pixelCanvas");
 
    testID.appendChild(testTable);
    testTable.border ='1';
                
    for(var i =0; i < gridHeight; i++) {
        var row = testTable.insertRow();
        for(var j =0; j < gridWidth; j++) {
             col =  row.insertCell();
        }
    }

    pixelCanvas.addEventListener('click', function(event){

        const SelectedColor =  document.getElementById('colorPicker');
        event.target.style.backgroundColor =  SelectedColor.value;
        console.log(SelectedColor.value);

    });

}
