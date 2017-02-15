export function sigmoid(x) {
  return 1 / (1 + Math.exp(-x))
}

export function sigmoidDerivative(x) {
  return sigmoid(x)*(1-sigmoid(x))
}

export function normalize(data) {
  const ret = { input: [], output: [] }

  data.map((datum) => {
    ret.output.push(datum.output)
    ret.input.push(datum.input)
  })

  return ret
}
