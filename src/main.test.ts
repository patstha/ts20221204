import { assert, describe, expect, it } from 'vitest'
import { addToNumbers } from './main'

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
        expect(addToNumbers(1, 2) === 3).to.be.true
    })
})