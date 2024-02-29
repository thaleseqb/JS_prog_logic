const arrayObject = require('./library-array');


// -- My interpretation 
function myInsertionSort(arrayObj, property) {
    for (let forIndex = 0; forIndex < arrayObj.length; forIndex++) {
        let [currentForIndex, auxCounter] = [forIndex, forIndex+1];
        while (auxCounter < arrayObj.length) {
            if (arrayObj[currentForIndex][property] > arrayObj[auxCounter][property]) {

                // swapping positions
                const temp = arrayObj[currentForIndex];
                arrayObj[currentForIndex] = arrayObj[auxCounter];
                arrayObj[auxCounter] = temp;
            };
            auxCounter++;
        };
    };
    return arrayObj
};

console.log(myInsertionSort(arrayObject, 'price'))


