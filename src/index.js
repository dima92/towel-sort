// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix && matrix.length > 0) {
        let newArray = []
        for (let i = 0; i <= matrix.length - 1; i++) {
            if (i % 2 !== 0) {
                matrix[i].reverse()
            }
            for (let j = 0; j <= matrix[i].length - 1; j++) {
                newArray.push(matrix[i][j])
            }
        }
        return newArray
    } else {
        return [];
    }
}
