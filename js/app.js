const { createApp } = Vue;

async function fetchData(url) {
    const response = await fetch(url);
    if (url.slice(-4) === 'json') {
        const parsed = await response.json();
        return parsed;
    }
    return response;
}

const app = createApp({
    data() {
        return {
            catchphrase: "",
            autobio: "",
            bioimg: "",
            demos: [],
            papers: [],
            works: [],
            edus: [],
            skills: []
        }
    },
    methods: {
        
    },
    async created() {
        var that = this;
        const myData = await fetchData('data/gw.json');
        this.catchphrase = myData.phrase;
        this.demos = myData.portfolio;
        this.papers = myData.research;
        this.autobio = myData.about.bio;
        this.bioimg = myData.about.img;
        this.works = myData.about.cv.work;
        this.edus = myData.about.cv.education;
        this.skills = myData.about.cv.skills;
    },
    mounted() {
	}
})

app.mount('#app');