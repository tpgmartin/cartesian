import * as linear_algebra from './linear_algebra'

export function logits(weightsForLayer, input, activation) {

  const activationRes = linear_algebra.matrixMultiplication(weightsForLayer, input)

  for (let i = 0; i < activationRes.length; i++) {
    for (let j = 0; j < activationRes[0].length; j++) {
      activationRes[i][j] = activation(activationRes[i][j])
    }
  }

  return activationRes

}

export function normalize(data) {
  const ret = { input: [], output: [] }

  data.map((datum) => {
    ret.output.push(datum.output)
    ret.input.push(datum.input)
  })

  return ret
}

export function sigmoid(x) {
  return 1 / (1 + Math.exp(-x))
}

export function sigmoidDerivative(x) {
  return sigmoid(x) * (1 - sigmoid(x))
}

