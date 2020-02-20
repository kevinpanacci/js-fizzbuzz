myList = [];

for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        myList.push('fizzbuzz');
    } else if (i % 5 == 0) {
        myList.push('buzz');
    } else if (i % 3 == 0) {
        myList.push('fizz');
    } else {
        myList.push(i);
    }
}

console.log(myList);
