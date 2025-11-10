var findKthPositive = function(arr, k) {
    let count = 0;
    for(const items of arr){
        if(items <= k + count){
            count++
        }
    }
    return k + count;
};

const findKthPositiveRes = findKthPositive([2,3,4,7,11],5)
console.log('findKthPositiveRes', findKthPositiveRes)