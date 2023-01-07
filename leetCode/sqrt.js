const sqrt = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i * i === num) {
        return i;
        } else if (i * i > num) {
        return i - 1;
        }
    }
};

const sqrtRes = sqrt(2);
console.log("sqrtRes", sqrtRes);
