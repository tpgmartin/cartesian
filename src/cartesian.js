import { normalize, sigmoid, sigmoidDerivative } from './helpers'

export default class Cartesian {

  constructor({
      activation = sigmoid,
      activationDerivative = sigmoidDerivative,
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
  }

  train(data) {
    normalize(data)
  }

}
