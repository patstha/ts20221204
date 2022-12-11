import { describe, expect, it } from 'vitest'
import { addToNumbers, extractOptions } from './main'


describe('add two numbers should return correct result', () => {
  it('should return three when you add one and two', () => {
    expect(addToNumbers(1, 2) === 3).to.be.true
  })
})

describe('extractOptions should return correct string', () => {
  it('should return empty string for an empty collection', () => {
    const interests = document.getElementById("interest-select") as HTMLSelectElement;
    let interestsHtmlCollection = interests.selectedOptions;
    expect(extractOptions(interestsHtmlCollection), "should return empty string").toEqual("");
  })
})
