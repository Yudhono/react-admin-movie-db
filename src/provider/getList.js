import axios from "axios";

const apiKey = "43a598c3ece17bd4d70f41a3ba47d9a5";
const apiUrl = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${apiUrl}/movie/now_playing`;

export default {
  getList: async (resource, params) => {
    if (resource === "movies") {
      try {
        const { data } = await axios.get(nowPlayingUrl, {
          params: {
            api_key: apiKey,
            language: "en_US",
            page: 1,
          },
        });

        const posterUrl = "https://image.tmdb.org/t/p/original/";
        const modifiedData = data["results"].map((m) => ({
          id: m["id"],
          backPoster: posterUrl + m["backdrop_path"],
          popularity: m["popularity"],
          title: m["title"],
          poster: posterUrl + m["poster_path"],
          overview: m["overview"],
          rating: m["vote_average"],
        }));

        console.log(modifiedData);

        return { data: modifiedData, total: modifiedData.total_pages };
      } catch (error) {
        console.log(error);
      }
    }
  },
};
