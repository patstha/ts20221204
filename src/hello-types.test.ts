import { assert, describe, expect, it } from 'vitest'
import addTwoNumbers from './hello-types'

describe('add two numbers should return correct result', () => {
    it('should return three when you add one and two', () => {
        expect(addTwoNumbers(1, 2) === 3).to.be.true
    })
})