'use sctrict'

function simpleArraySum_solution1() {
    let ar = [1, 3, 5, 7, 9];
    let sum = 0;

    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    console.log(sum);    
}
