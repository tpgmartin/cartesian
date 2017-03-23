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

    // TODO
    // 1. Declare activationDerivative
    // 2. Find error, subtract ouput vector from results vector
    // 3. For each layer find,
    //    * weight delta
    //    * change
    //    * update weights for layer
    // 4. Return output error

  }

  _forwardPropagation(normalizedData) {

    const results = []
    // input to hidden
    results.push(helpers.logits(this.weights[0],
                                normalizedData.input,
                                this.activation))

    // hidden to output
    results.push(helpers.logits(this.weights[this.weights.length - 1],
                 results[results.length - 1], this.activation))

    return results

  }

  _setWeights(normalizedData) {

    this.weights.push([])
    for (let i = 0; i < normalizedData.input[0].length; i++) {
      this.weights[0].push([])
      for (let j = 0; j < this.hiddenUnits; j++) {
        this.weights[0][i].push(0.5)
      }
    }

    this.weights.push([])
    for (let i = 0; i < this.hiddenUnits; i++) {
      this.weights[1].push([])
      for (let j = 0; j < normalizedData.output[0].length; j++) {
        this.weights[1][i].push(0.5)
      }
    }

  }

  train(data) {

    const normalizedData = helpers.normalize(data)

    this._setWeights(normalizedData)

    for (let i = 0; i < this.iterations; i++) {
      this._forwardPropagation(normalizedData)
      this._backwardPropagation()
    }

  }

}
