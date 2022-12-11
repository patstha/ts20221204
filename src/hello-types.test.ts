import { assert, describe, expect, it } from 'vitest'
import addTwoNumbers from './hello-types'

describe('suite name', () => {
  it('foo', () => {
    expect(1 + 1).toEqual(2)
    expect(true).to.be.true
  })

  it('bar', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})

describe('add two numbers should return correct result', () => {
    it('should return three when you add one and two', () => {
        expect(addTwoNumbers(1, 2) === 3).to.be.true
    })
})