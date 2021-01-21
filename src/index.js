exports.min = function min(array) {
    let result = 0;

    if (array !== undefined && array[0] !== undefined) {
        result = Math.min(...array);
    }

    return result;
};

exports.max = function max(array) {
    let result = 0;

    if (array !== undefined && array[0] !== undefined) {
        result = Math.max(...array);
    }

    return result;
};

exports.avg = function avg(array) {
    let result = 0;

    if (array !== undefined && array[0] !== undefined) {
        result = array.reduce((a, b) => a + b) / array.length;
    }

    return result;
};
