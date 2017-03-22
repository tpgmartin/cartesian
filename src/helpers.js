export function backwardPropagation() {

}

export function forwardPropagation(normalizedData, activation, weights) {

  const results = []
  // input to hidden
  results.push(logits(weights[0], normalizedData.input, activation))

  // hidden to output
  results.push(logits(weights[weights.length - 1], results[results.length - 1], activation))

  return results

}

export function normalize(data) {
  const ret = { input: [], output: [] }

  data.map((datum) => {
    ret.output.push(datum.output)
    ret.input.push(datum.input)
  })

  return ret
}

export function logits(weightsForLayer, input, activation) {

  const matMulRes = []

  for (let i = 0; i < input.length; i++) {
    matMulRes.push([])
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < weightsForLayer[0].length; j++) {
      let sum = 0
      for (let k = 0; k < weightsForLayer.length; k++) {
        sum += input[i][k] * weightsForLayer[k][j]
      }
      matMulRes[i].push(sum)
    }
  }

  const activationRes = matMulRes

  for (let i = 0; i < activationRes.length; i++) {
    for (let j = 0; j < activationRes[0].length; j++) {
      activationRes[i][j] = activation(activationRes[i][j])
    }
  }

  return activationRes

}

export function setWeights(normalizedData, hiddenUnits, weights) {

  weights.push([])
  for (let i = 0; i < normalizedData.input[0].length; i++) {
    weights[0].push([])
    for (let j = 0; j < hiddenUnits; j++) {
      weights[0][i].push(0.5)
    }
  }

  weights.push([])
  for (let i = 0; i < hiddenUnits; i++) {
    weights[1].push([])
    for (let j = 0; j < normalizedData.output[0].length; j++) {
      weights[1][i].push(0.5)
    }
  }

  return weights

}

export function sigmoid(x) {
  return 1 / (1 + Math.exp(-x))
}

export function sigmoidDerivative(x) {
  return sigmoid(x) * (1 - sigmoid(x))
}

