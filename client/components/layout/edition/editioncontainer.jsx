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



    renderFeaturedArticles()
    {
        // Get articles from this.data.articles

        return this.data.articles.map((article) => {


            if(article.articleIsFeatured == true && article.articleColumn == "Inspiration" )
            {
                return <InspirationFeaturedArticle

                    key={article._id} article={article}

                />;
            }
            if(article.articleIsFeatured == true && article.articleColumn == "Motivation" )
            {
                return <MotivationFeaturedArticle

                    key={article._id} article={article}

                />;
            }
            if(article.articleIsFeatured == true && article.articleColumn == "Life" )
            {
                return <LifeFeaturedArticle

                    key={article._id} article={article}

                />;
            }
            if(article.articleIsFeatured == true && article.articleColumn == "Style" )
            {
                return <StyleFeaturedArticle

                    key={article._id} article={article}

                />;
            }
            if(article.articleIsFeatured == true && article.articleColumn == "More" )
            {
                return <MoreFeaturedArticle

                    key={article._id} article={article}

                />;
            }
        });

    },


    renderArticles() {

        // Get articles from this.data.articles

        return this.data.articles.map((article) => {

            if(article.articleIsFeatured == false && article.articleColumn == "Inspiration" )
            {
                return <InspirationArticle

                    key={article._id} article={article}

                />;
            }
            if(article.articleIsFeatured == false && article.articleColumn == "Motivation" )
            {
                return <MotivationArticle

                    key={article._id} article={article}

                />;
            }
            if(article.articleIsFeatured == false && article.articleColumn == "Life" )
            {
                return <LifeArticle

                    key={article._id} article={article}

                />;
            }
            if(article.articleIsFeatured == false && article.articleColumn == "Style" )
            {
                return <StyleArticle

                    key={article._id} article={article}

                />;
            }
            if(article.articleIsFeatured == false && article.articleColumn == "More" )
            {
                return <MoreArticle

                    key={article._id} article={article}

                />;
            }
        });

    },




    render() {

        var featuredArticlesContainer = {

            display: 'flex',

            flexDirection: 'row',

            flewWrap: 'wrap',

            justifyContent: 'center',



        };

        var section = {
            display: 'block',
            width: '90%',
            margin: '0',
            margin: 'auto',

        };

        var articlesContainer = {


            width: '100%',
            display: '-webkit-box',
            display: 'moz-box',
            display: '-ms-flexbox',
            display: '-moz-flex',
            display: '-webkit-flex',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'left',


        };

        return (
                <section style ={section}>

                <div style={featuredArticlesContainer}>{this.renderFeaturedArticles()}</div>

                <div style={articlesContainer}>{this.renderArticles()}</div>

                </section>

        );

    }

});

