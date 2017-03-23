import * as helpers from './helpers'

export default class Cartesian {

  constructor({
    activation = helpers.sigmoid,
    activationDerivative = helpers.sigmoidDerivative,
    hiddenLayers = 1,
    hiddenUnits = 3,
    iterations = 1000,
    learningRate = 0.1
  } = {}) {
    this.activation = activation
    this.activationDerivative = activationDerivative
    this.hiddenLayers = hiddenLayers
    this.hiddenUnits = hiddenUnits
    this.iterations = iterations
    this.learningRate = learningRate
    this.weights = []
  }

  _backwardPropagation() {

  }

  _forwardPropagation(normalizedData, activation, weights) {

    const results = []
    // input to hidden
    results.push(helpers.logits(weights[0], normalizedData.input, activation))

    // hidden to output
    results.push(helpers.logits(weights[weights.length - 1],
                 results[results.length - 1], activation))

    return results

  }

  _setWeights(normalizedData, hiddenUnits, weights) {

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

  train(data) {
    const normalizedData = helpers.normalize(data)

    this._setWeights(normalizedData, this.hiddenUnits, this.weights)

    for (let i = 0; i < this.iterations; i++) {
      this._forwardPropagation(normalizedData, this.activation, this.weights)
      this._backwardPropagation()
    }

  }

}
