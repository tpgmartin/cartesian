/*eslint no-console: ["error", { allow: ["warn", "log", "error"] }] */

import { expect } from 'chai'
import Cartesian from '../src/cartesian'
import { sigmoid, sigmoidDerivative } from '../src/helpers'

describe('Cartesian', () => {

  describe('constructor', () => {

    it('should return new neuron object', () => {
      const cartesian = new Cartesian()

      expect(cartesian).to.be.an('object')
      expect(cartesian).to.be.instanceof(Cartesian)
    })

    it('should be initialised with default paramters', () => {
      const cartesian = new Cartesian()

      expect(cartesian.activation).to.equal(sigmoid)
      expect(cartesian.activationDerivative).to.equal(sigmoidDerivative)
      expect(cartesian.hiddenLayers).to.equal(1)
      expect(cartesian.hiddenUnits).to.equal(3)
      expect(cartesian.iterations).to.equal(1000)
      expect(cartesian.learningRate).to.equal(0.1)
    })

    it('should be initialised with custome paramters', () => {
      const options = {
        hiddenLayers: 2,
        iterations: 100000,
        learningRate: 0.5
      }
      const cartesian = new Cartesian(options)

      expect(cartesian.activation).to.equal(sigmoid)
      expect(cartesian.activationDerivative).to.equal(sigmoidDerivative)
      expect(cartesian.hiddenLayers).to.equal(options.hiddenLayers)
      expect(cartesian.hiddenUnits).to.equal(3)
      expect(cartesian.iterations).to.equal(options.iterations)
      expect(cartesian.learningRate).to.equal(options.learningRate)
    })

  })

})
