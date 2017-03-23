/*eslint no-console: ["error", { allow: ["warn", "log", "error"] }] */

import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Cartesian from '../../src/cartesian'
import * as helpers from '../../src/helpers'

chai.use(sinonChai)

describe('Cartesian', () => {

  let cartesian

  beforeEach(() => {
    cartesian = new Cartesian()
  })

  describe('constructor', () => {

    it('should return new neuron object', () => {

      expect(cartesian).to.be.an('object')
      expect(cartesian).to.be.instanceof(Cartesian)

    })

    it('should be initialised with default paramters', () => {

      expect(cartesian.activation).to.equal(helpers.sigmoid)
      expect(cartesian.activationDerivative).to.equal(helpers.sigmoidDerivative)
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

      expect(cartesian.activation).to.equal(helpers.sigmoid)
      expect(cartesian.activationDerivative).to.equal(helpers.sigmoidDerivative)
      expect(cartesian.hiddenLayers).to.equal(options.hiddenLayers)
      expect(cartesian.hiddenUnits).to.equal(3)
      expect(cartesian.iterations).to.equal(options.iterations)
      expect(cartesian.learningRate).to.equal(options.learningRate)
    })

  })

  describe('train', () => {

    it('should normalise input examples', () => {

      sinon.spy(helpers, 'normalize')

      cartesian.train([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] }
      ])

      const expectedOutput = {
        input: [[0, 0], [0, 1], [1, 0], [1, 1]],
        output: [[0], [1], [1], [0]]
      }

      expect(helpers.normalize.returnValues[0]).to.deep.equal(expectedOutput)
      expect(helpers.normalize).to.have.been.calledOnce

      helpers.normalize.restore()

    })

    it('should set weights for network', () => {

      sinon.spy(cartesian, '_setWeights')

      cartesian.train([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] }
      ])

      const expectedOutput = [
        [
          [ 0.5, 0.5, 0.5 ],
          [ 0.5, 0.5, 0.5 ]
        ],
        [
          [ 0.5 ],
          [ 0.5 ],
          [ 0.5 ]
        ]
      ]

      expect(cartesian.weights).to.deep.equal(expectedOutput)
      expect(cartesian._setWeights).to.have.been.calledOnce

      cartesian._setWeights.restore()

    })

    it('should call forwardPropagation, backwardPropagation number of times ' +
       'equal to \'iterations\'', () => {

      sinon.spy(cartesian, '_forwardPropagation')
      sinon.spy(cartesian, '_backwardPropagation')

      cartesian.train([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] }
      ])

      expect(cartesian._forwardPropagation.callCount)
                                          .to.equal(cartesian.iterations)
      expect(cartesian._backwardPropagation.callCount)
                                           .to.equal(cartesian.iterations)

      cartesian._forwardPropagation.restore()
      cartesian._backwardPropagation.restore()

    })

    it('should call forwardPropagation and ' +
       'return network output vector', () => {

      const weights = [
        [
          [ 0.5, 0.5, 0.5 ],
          [ 0.5, 0.5, 0.5 ]
        ],
        [
          [ 0.5 ],
          [ 0.5 ],
          [ 0.5 ]
        ]
      ]
      const normalizedData = {
        input: [[0, 0], [0, 1], [1, 0], [1, 1]],
        output: [[0], [1], [1], [0]]
      }
      const activation = helpers.sigmoid

      cartesian.weights = weights
      cartesian.activation = activation

      const expectedOutput = [
        [
          [ 0.5, 0.5, 0.5 ],
          [ 0.6224593312018546, 0.6224593312018546, 0.6224593312018546 ],
          [ 0.6224593312018546, 0.6224593312018546, 0.6224593312018546 ],
          [ 0.7310585786300049, 0.7310585786300049, 0.7310585786300049 ]
        ],
        [
          [ 0.679178699175393 ],
          [ 0.7178231032752898 ],
          [ 0.7178231032752898 ],
          [ 0.7496202290400685 ]
        ]
      ]

      expect(cartesian._forwardPropagation(normalizedData))
                      .to.deep.equal(expectedOutput)

    })

    it('should call backwardPropagation and ' +
       'return network output vector', () => {

      throw Error

    })

  })

})
