/*eslint no-console: ["error", { allow: ["warn", "log", "error"] }] */

import { expect } from 'chai'
import * as helpers from '../../src/helpers'

describe('Helpers', () => {

  describe('logits', () => {

    it('should return matrix after applying activation', () => {
      const weights = [[ 0.5, 0.5, 0.5 ],
                        [ 0.5, 0.5, 0.5 ]]
      const input = [[0, 0],
                     [0, 1],
                     [1, 0],
                     [1, 1]]
      const activation = helpers.sigmoid

      const expectedOutput = [[ 0.5, 0.5, 0.5 ],
                              [ 0.6224593312018546, 0.6224593312018546, 0.6224593312018546 ],
                              [ 0.6224593312018546, 0.6224593312018546, 0.6224593312018546 ],
                              [ 0.7310585786300049, 0.7310585786300049, 0.7310585786300049 ]]

      expect(helpers.logits(weights, input, activation)).to.deep.equal(expectedOutput)
    })

  })

})
