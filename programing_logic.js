const arrayObj = require('./testing');

let cheaperIndex = 0

function selectLower(arrayOfObjects, initialPosition) {
    for (let currentIndex = initialPosition; currentIndex < arrayOfObjects.length; currentIndex++) {
        if (arrayOfObjects[currentIndex].price < arrayOfObjects[cheaperIndex].price) {
            cheaperIndex = currentIndex
            return cheaperIndex
        };
    };
};

const lowerIndex = selectLower(arrayObj, 0)
console.log(`o valor é ${arrayObj[lowerIndex].price} e o livro é ${arrayObj[lowerIndex].title}`)
// someone needs to ordenate the list in te crescent order

// it is necessary to use spread operator to get the minimum value from an array
