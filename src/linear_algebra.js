export function dotProduct(m1, m2) {

  return matrixMultiplication(m1, transpose(m2))

}

export function matrixAddition(m1, m2) {

  const result = []

  for (let i = 0; i < m1.length; i++) {
    result.push([])
  }

  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m1[0].length; j++) {
      result[i].push(m1[i][j] + m2[i][j])
    }
  }

  return result

}

export function matrixMultiplication(m1, m2) {

  const result = []

  for (let i = 0; i < m2.length; i++) {
    result.push([])
  }

  for (let i = 0; i < m2.length; i++) {
    for (let j = 0; j < m1[0].length; j++) {
      let sum = 0
      for (let k = 0; k < m1.length; k++) {
        sum += m1[k][j] * m2[i][k]
      }
      result[i].push(sum)
    }
  }

  return result

}

export function matrixSubtraction(m1, m2) {

  const result = []

  for (let i = 0; i < m1.length; i++) {
    result.push([])
  }

  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m1[0].length; j++) {
      result[i].push(m1[i][j] - m2[i][j])
    }
  }

  return result

}

export function scalarMultiplication(s, m) {

  return m.map(row => row.map(el => s[0][0] * el))

}

export function transform(m, fn) {

  return m.map(row => row.map(el => fn(el)))

}

export function transpose(m) {

  const result = []

  for (let i = 0; i < m[0].length; i++) {
    result.push([])
  }

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[0].length; j++) {
      result[j][i] = m[i][j]
    }
  }

  return result

}
