export function backwardPropagation() {

}

export function forwardPropagation(normalizedData) {

  // TODO
  // 1. Get activation, weights
  // 2. For each layer, for each data sample, find dot product of weight with layer input
  // 3. Apply activation function elementwise
  // 4. Return output result

}

export function normalize(data) {
  const ret = { input: [], output: [] }

  data.map((datum) => {
    ret.output.push(datum.output)
    ret.input.push(datum.input)
  })

  return ret
}

export function setWeights(normalizedData, hiddenUnits, weights) {

  weights.push([])
  for (let i=0; i<normalizedData.input[0].length; i++) {
    weights[0].push([])
    for (let j=0; j<hiddenUnits; j++) {
      weights[0][i].push(0.5)
    }
  }

  weights.push([])
  for (let i=0; i<hiddenUnits; i++) {
    weights[1].push([])
    for (let j=0; j<normalizedData.output[0].length; j++) {
      weights[1][i].push(0.5)
    }
  }

  return weights

}

export function sigmoid(x) {
  return 1 / (1 + Math.exp(-x))
}

export function sigmoidDerivative(x) {
  return sigmoid(x)*(1-sigmoid(x))
}

