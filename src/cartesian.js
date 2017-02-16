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

  train(data) {
    const normalizedData = helpers.normalize(data)

    helpers.setWeights(normalizedData, this.hiddenUnits, this.weights)

    for (let i = 0; i < this.iterations; i++) {
      helpers.forwardPropagation(normalizedData)
      helpers.backwardPropagation()
    }

  }

}
