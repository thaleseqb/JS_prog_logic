const arrayObject = require('./library-array');

function insertionSort(arrayObj) {
    for (let forIndex = 0; forIndex < arrayObj.length; forIndex++) {
        let currentForIndex = forIndex;
        let auxCounter = 1;

        while (
            arrayObj[currentForIndex].price >= arrayObj[auxCounter].price && auxCounter < arrayObj.length
        ) 
        {
            // swapping positions
            const temp = arrayObj[currentForIndex];
            arrayObj[currentForIndex] = arrayObj[auxCounter];
            arrayObj[auxCounter] = temp
            auxCounter++
        };
    };
    return arrayObj
};

console.log(insertionSort(arrayObject))