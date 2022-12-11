import { assert, describe, it } from 'vitest'
import addTwoNumbers from './hello-types'

describe('add two numbers should return correct result', () => {
    it('should return three when you add one and two', () => {
        assert.equal(addTwoNumbers(1, 2), 3)
    })
})