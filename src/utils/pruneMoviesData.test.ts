import { pruneMoviesData } from './pruneMoviesData'
import { sampleMovies, prunedSampleMovies } from './sampleMovies'

describe(pruneMoviesData, () => {
  it('Prunes unnecessary properties', () => {
    expect(pruneMoviesData(sampleMovies)).toEqual(prunedSampleMovies)
  })
})
