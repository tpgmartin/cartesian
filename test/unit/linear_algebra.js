/*eslint no-console: ["error", { allow: ["warn", "log", "error"] }] */

import { expect } from 'chai'
import * as linear_algebra from '../../src/linear_algebra'

describe('Linear Algebra', () => {

  describe('hadamardProduct', () => {

    it('should return dot product of valid matrix', () => {
      const A = [[1], [2], [3]]
      const B = [[4], [5], [6]]

      const expectedOutput = [[4], [10], [18]]

      expect(linear_algebra.hadamardProduct(A, B))
                    .to.deep.equal(expectedOutput)
    })

  })

  describe('matrixAddition', () => {

    it('should add valid matrices together', () => {
      const A = [[ 1, 2, 3 ],
                 [ 4, 5, 6 ],
                 [ 7, 8, 9 ]]
      const B = [[ -1, -2, -3 ],
                 [ -4, -5, -6 ],
                 [ -7, -8, -9 ]]

      const expectedOutput = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]

      expect(linear_algebra.matrixAddition(A, B))
                    .to.deep.equal(expectedOutput)
    })

  })

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

  describe('matrixSubtraction', () => {

    it('should add valid matrices together', () => {
      const A = [[ 1, 2, 3 ],
                 [ 4, 5, 6 ],
                 [ 7, 8, 9 ]]
      const B = [[ -1, -2, -3 ],
                 [ -4, -5, -6 ],
                 [ -7, -8, -9 ]]

      const expectedOutput = [
        [2, 4, 6],
        [8, 10, 12],
        [14, 16, 18]
      ]

      expect(linear_algebra.matrixSubtraction(A, B))
                    .to.deep.equal(expectedOutput)
    })

  })

  describe('scalarMultiplication', () => {

    it('should multiply each element in matrix by scalar', () => {
      const scalar = [[5]]
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

  describe('transform', () => {

    it('should apply function elementwise', () => {
      const addOne = x => x += 1
      const matrix = [[ 1, 2, 3 ],
                      [ 4, 5, 6 ],
                      [ 7, 8, 9 ]]

      const expectedOutput = [[ 2, 3, 4 ],
                              [ 5, 6, 7 ],
                              [ 8, 9, 10 ]]

      expect(linear_algebra.transform(matrix, addOne))
                    .to.deep.equal(expectedOutput)
    })

  })

  describe('transpose', () => {

    it('should transpose matrix', () => {
      const matrix = [[ 1, 2, 3 ],
                      [ 4, 5, 6 ],
                      [ 7, 8, 9 ]]

      const expectedOutput = [[ 1, 4, 7 ],
                              [ 2, 5, 8 ],
                              [ 3, 6, 9 ]]

      expect(linear_algebra.transpose(matrix))
                    .to.deep.equal(expectedOutput)
    })

  })

})
