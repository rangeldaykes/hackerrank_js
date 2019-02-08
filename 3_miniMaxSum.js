'use sctrict'

function miniMaxSum_solution1() {
    let arr = [1, 3, 5, 7, 9];
    arr.sort();

    let min = 0;
    let max = 0;
    for (let i = 0; i < 4; i++) {
        min += arr[i];
        max += arr[i + 1];
    }

    console.log(min, max);
}

function miniMaxSum_solution2() {
    let arr = [1, 3, 5, 7, 9];
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        sum += element

        min = element < min ? element : min;
        max = element > max ? element : max;
    }

    console.log(sum - max, sum - min);
}