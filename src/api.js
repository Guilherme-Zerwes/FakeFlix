const API_KEY = '48f2ff61dfc5852a349c15a40b85a5db';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (urlEnd) => {
    const req = await fetch(`${API_BASE}${urlEnd}`);
    const json = await req.json();
    return json;
}

const Api = { //function for fetching home list movies
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do FakeFlix',
                items: await basicFetch(`/discover/tv?with_networks=213&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'horroh',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`)
            },
        ]
    },

    getFeaturedInfo: async (id,type) => {
        let info = {}
        if (type) {
            info = await basicFetch(`/${type}/${id}?language=pt-br&api_key=${API_KEY}&append_to_response=similar`)
        }
        return info
    },
}

export default Api