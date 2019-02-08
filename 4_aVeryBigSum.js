'use sctrict'


function aVeryBigSum_solution1() {
    let ar = [1,2,3,4,5];

    function getSum(total, num) {
        return total + num;
    }

    let sum = ar.reduce(getSum);

    /**
     * or 
     * let sum2 = ar.reduce((total, num) => total + num);
     */
    
    console.log(sum);
    return sum;
}