export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=040f98bcccc39b0127307ad91a668e07&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };