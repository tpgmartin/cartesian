import * as helpers from './helpers'
import { hadamardProduct, matrixAddition, matrixMultiplication, matrixSubtraction, scalarMultiplication, transform, transpose } from './linear_algebra'

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

  train(data) {

    const normalizedData = helpers.normalize(data)

    this._setWeights(normalizedData)

    for (let i = 0; i < this.iterations; i++) {
      this._backwardPropagation(normalizedData,
                                this._forwardPropagation(normalizedData))
    }

  }

  _backwardPropagation(normalizedData, results) {

    const learningRate = [[this.learningRate]]
    const weights = this.weights

    // output to hidden
    const error = matrixSubtraction(normalizedData.output, results[results.length - 1].activation)
    let activation = transform(results[results.length - 1].product, this.activationDerivative)
    let delta = hadamardProduct(activation, error)
    let update = scalarMultiplication(learningRate, matrixMultiplication(delta, transpose(results[0].activation)))
    weights[weights.length - 1] = matrixAddition(weights[weights.length - 1], update)

    // hidden to inputt
    delta = hadamardProduct(matrixMultiplication(transpose(weights[1]), delta), transform(results[0].product, this.activationDerivative))
    update = scalarMultiplication(learningRate, matrixMultiplication(delta, transpose(normalizedData.input)))
    weights[0] = matrixAddition(weights[0], update)

    return error

  }

  _forwardPropagation(normalizedData) {

    const results = []
    // input to hidden
    results.push(helpers.logits(this.weights[0],
                                normalizedData.input,
                                this.activation))

    // hidden to output
    results.push(helpers.logits(this.weights[this.weights.length - 1],
                 results[results.length - 1].activation, this.activation))

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

}
