import { describe, expect, it } from 'vitest'
import { extractOptions } from './main'

describe('extractOptions should return correct string', () => {
  it('should return empty string for an empty collection', () => {
    const interests = document.getElementById("interest-select") as HTMLSelectElement;
    let interestsHtmlCollection = interests.selectedOptions;
    expect(extractOptions(interestsHtmlCollection), "should return empty string").toEqual("");
  })
})
