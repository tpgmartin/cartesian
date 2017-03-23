export function matrixMultiplication(a, b) {

  const matMulRes = []

  for (let i = 0; i < b.length; i++) {
    matMulRes.push([])
  }

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a[0].length; j++) {
      let sum = 0
      for (let k = 0; k < a.length; k++) {
        sum += b[i][k] * a[k][j]
      }
      matMulRes[i].push(sum)
    }
  }

  return matMulRes

}
