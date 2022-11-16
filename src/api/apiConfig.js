const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey:'618b55090366aeab27c8e27808c2db1b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;