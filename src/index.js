module.exports = function towelSort (matrix) {
    if (arguments.length === 0 || matrix.length === 0) {
        return [];
    } else {
        for (let i = 1; i < matrix.length; i += 2) {
            matrix[i] = matrix[i].reverse();
        }
        let newArray = [];
        for (let i = 0; i < matrix.length; i += 1) {
            for (let j = 0; j < matrix[i].length; j += 1) {
                newArray.push(matrix[i][j]);
            }
        }
        return newArray;
    }
}
