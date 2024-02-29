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

function instInsertionSort (arrayObj, property) {
    for (let forIndex = 0; forIndex < arrayObj.length; forIndex++) {
        let curIdx = forIndex;
        while (curIdx > 0 && arrayObj[curIdx][property] < arrayObj[curIdx-1][property]) {
            // swapping positions
            const temp = arrayObj[curIdx];
            arrayObj[curIdx] = arrayObj[curIdx-1];
            arrayObj[curIdx-1] = temp;
            curIdx--
        };
    };
    return arrayObj
};

console.log(instInsertionSort(arrayObject, 'price'))
