const test = new Promise(
    (resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(console.log('Success!'))
            }, 3000);
        } catch (error) {
            setTimeout(() => {
                reject(console.log('Fail!'))
            }, 3000)
        }
    }
)

test


function fullName(firstName, lastName) {
    const promise = new Promise((resolve, reject) => {
        if (!firstName || !lastName) {
            reject('Invalid input')
        } else {
            resolve(firstName + ' ' + lastName)
        }
    })
}


function multiplyByTwo(num) {
    const promise = new Promise((resolve, reject) => {
        if (num === 0) {
            setTimeout(() => {
                reject(new Error('Invalid Number'));
            }, 500);
        }
        else {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        }
    })
    return promise;
}

function addFive(num) {
    const promise = new Promise((resolve, reject) => {
        if (num) {
            setTimeout(() => {
                resolve(num + 5);
            }, 500);
        }
        else {
            setTimeout(() => {
                reject(new Error('Invalid Number 2'))
            }, 500);
        }
    })
    return promise;
}

function subtractTen(num) {
    const promise = new Promise((resolve, reject) => {
        if (num < 10) {
            reject(new Error('Less Then 10'))
        }
        else {
            resolve(num - 10)
        }
    });
    return promise;
}

multiplyByTwo(3)
    .then((correctResult) => addFive(correctResult))
    .then((secondeResult) => subtractTen(secondeResult))
    .then((finalResult) => console.log(finalResult))
    .catch((error) => console.log(error))
    .finally(() => console.log('Kol Hamahalot'));