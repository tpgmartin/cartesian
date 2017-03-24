export function matrixMultiplication(a, b) {

  const result = []

  for (let i = 0; i < b.length; i++) {
    result.push([])
  }

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a[0].length; j++) {
      let sum = 0
      for (let k = 0; k < a.length; k++) {
        sum += b[i][k] * a[k][j]
      }
      result[i].push(sum)
    }
  }

  return result

}

export function scalarMultiplication(s, m) {

  return m.map(row => row.map(el => s * el))

}
