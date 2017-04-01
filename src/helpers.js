import * as linear_algebra from './linear_algebra'

export function logits(weightsForLayer, input, activation) {

  const result = {}
  result.product = linear_algebra.matrixMultiplication(weightsForLayer, input)
  result.activation = linear_algebra.transform(result.product, activation)

  return result

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

