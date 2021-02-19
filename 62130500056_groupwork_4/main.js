    const app = {
        data() {
            return {
                tasks: [{
                        image: './images/food1.jpg',
                        article: 'Steamed crab',
                        like: false
                    },
                    {
                        image: './images/food2.jpg',
                        article: 'Steamed shrimp',
                        like: false
                    },
                    {
                        image: './images/food3.jpg',
                        article: 'Oyster',
                        like: false
                    }
                ],
                search: false,
                input: '',
                notFound: false,
                showImages: false,

            }

        },

        methods: {
            togglelike(index) {
                this.tasks[index].like = !this.tasks[index].like
            },

            toggleSearch() {
                this.search = !this.search;

            },


            switchSearchClicked() {
                this.searchClicked = !this.searchClicked;
                if (this.searchClicked == false) {
                    this.inputSearch = '';
                }
            },
            close() {
                this.showImages = false;
            },
            // imgClicked(index) {
            //     this.showImages = true;
            //     this.currentIndex = index;


        },
        computed: {
            countUnlike() {
                return this.tasks.filter(t => !t.like).length
            },

            like() {
                return this.tasks.filter(t => t.like).length
            },

            inputSearch() {
                if (this.inputSearch == '') {
                    return this.tasks;
                } else {
                    NF = this.tasks.filter(p => p.article.includes(this.input.toLowerCase()));
                    if (NF == '') {
                        this.notFound = true;
                    } else {
                        return NF;
                    }

                }

            },

        }
    }


    Vue.createApp(app).mount('#app')