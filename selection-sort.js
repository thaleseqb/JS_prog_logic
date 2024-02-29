const arrayObj = require('./testing');

function selectLower(arrayOfObjects, initialPosition) {
    // It is not interesting make the verification over and over again.
    // So the lower array value index is changed every single time the 
    // function is called
    let cheaperIndex = initialPosition;
    for (let currentIndex = initialPosition; currentIndex < arrayOfObjects.length; currentIndex++) {
        // this condition gets the lower value of the array
        if (arrayOfObjects[currentIndex].price < arrayOfObjects[cheaperIndex].price) {
            cheaperIndex = currentIndex;
            
        };
    };
    return cheaperIndex;
};

function ordenateArray(arrayOfObjects) {
    for (let forIndex = 0; forIndex < arrayOfObjects.length; forIndex++) {
        // calling the function that get the lower array value index
        let cheaperIndex = selectLower(arrayOfObjects, forIndex);

        // swapping position of elements in javascript
        // it is necessary to create a temporary variable to swicth positions
        let temp = arrayOfObjects[forIndex];
        arrayOfObjects[forIndex] = arrayOfObjects[cheaperIndex];
        arrayOfObjects[cheaperIndex] = temp;
    };
    return arrayOfObjects;
};