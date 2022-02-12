## Improvements

### Error Handling

No Error handling has been implemented to notify the user when something goes wrong. The reasons are:
- to speed up development
- the eventual notification component would probably never trigger since the movie database is pretty stable

The rejection of a promise triggered by a thunk (and loading status) could have been processed in the store:

```
extraReducers: builder => {
    builder
      // fetchGenres
      .addCase(fetchGenres.pending, (state) => { state.isLoading = true })
      .addCase(fetchGenes.fulfilled, (state, action: PayloadAction<IPresentersData>) => {
        state.isLoading = false
        state.presentersData = action.payload.presenters
      })
      .addCase(fetchGenres.rejected, (state) => { 
          state.isLoading = false
          // activate error notification here
        })
```
