/*eslint no-console: ["error", { allow: ["warn", "log", "error"] }] */

import { expect } from 'chai'
import * as linear_algebra from '../../src/linear_algebra'

describe('Linear Algebra', () => {

  describe('matrixMultiplication', () => {

    it('should multiply valid matrices together', () => {
      const A = [[ 1, 1, 1 ],
                 [ 1, 1, 1 ],
                 [ 1, 1, 1 ]]
      const B = [[ -2, 2, -3 ],
                 [ -1, 1, 3 ],
                 [ 2, 0, -1 ]]

      const expectedOutput = [
        [ -3, -3, -3 ],
        [ 3, 3, 3 ],
        [ 1, 1, 1 ]
      ]

      expect(linear_algebra.matrixMultiplication(A, B))
                    .to.deep.equal(expectedOutput)
    })

  })

  describe('scalarMultiplication', () => {

    it('should multiply each element in matrix by scalar', () => {
      const scalar = 5
      const matrix = [[ 1, 2, 3 ],
                      [ 4, 5, 6 ],
                      [ 7, 8, 9 ]]

      const expectedOutput = [
        [ 5, 10, 15 ],
        [ 20, 25, 30 ],
        [ 35, 40, 45 ]
      ]

      expect(linear_algebra.scalarMultiplication(scalar, matrix))
                    .to.deep.equal(expectedOutput)
    })

  })

})
