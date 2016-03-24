// App component - represents the whole app
EditionContainer = React.createClass({


    // This mixin makes the getMeteorData method work

    mixins: [ReactMeteorData],

    getInitialState() {

        return {

            columnSelected: false,
            filterFeaturedArticle: false,
            inspirationIsSelected: false,
            motivationIsSelected:false,
            lifeIsSelected:false,
            styleIsSelected: false,
            moreIsSelected: false,
            betaFilterSelected: ""

        }

    },
    // Loads items from the Articles collection and puts them on this.data.articles

    getMeteorData() {

        let articleQuery = {};

        if (this.state.inspirationIsSelected == true)
        {
            articleQuery = {articleColumn : this.state.betaFilterSelected};
        }



        if (this.state.columnSelected == true) {

            // If hide completed is checked, filter tasks

            articleQuery = {articleColumn : "Inspiration"};

        }

/*        if (this.state.betaFilterSelected == "motivation")
        {
            articleQuery = {articleColumn : "Motivation"}

        }*/

        return {

            articles: Articles.find(articleQuery, {sort: {createdAt: -1}}).fetch(),



        };

    },


    toggleButton(){

        this.setState({columnSelected: !this.state.columnSelected});

    },

    toggleFilterSelected()
    {

        var filter = React.findDOMNode(this.refs.motivationButton).value.trim();

        this.setState({betaFilterSelected: this.state.betaFilterSelected = filter})
    },

    toggleFeaturedArticle()
    {
        this.setState({filterFeaturedArticle: this.state.filterFeaturedArticle = true})
    },




    renderFeaturedArticles(){

        return this.data.articles.map((article) => {

            if(article.articleIsFeatured == true)
            {
                return <FeaturedArticle

                    key={article._id} article={article}

                    />;
            }
        })

    },


    renderArticles() {

        // Get articles from this.data.articles

        return this.data.articles.map((article) => {

            if(article.articleIsFeatured == false)
            {
                return <Article

                    key={article._id} article={article}

                />;
            }
        });

    },


    render() {

        return (
                <section>

                <div className="featured-articles-container">{this.renderFeaturedArticles()}</div>





                <div className="articles-container">{this.renderArticles()}</div>


                </section>





        );

    }

});

