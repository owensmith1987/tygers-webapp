
// App component - represents the whole app
ArticleOverview = React.createClass({


    // This mixin makes the getMeteorData method work

    mixins: [ReactMeteorData],

    getInitialState() {

        return {

            toggleInspiration: false

        }

    },
    // Loads items from the Articles collection and puts them on this.data.articles

    getMeteorData() {

        let articleQuery = {};


        if (this.state.columnSelected == true) {

            // If hide completed is checked, filter tasks

            articleQuery = {articleColumn : "Inspiration"};

        }

        return {

            articles: Articles.find(articleQuery, {sort: {createdAt: -1}}).fetch(),


        };

    },


    toggleButton(){

        this.setState({columnSelected: !this.state.columnSelected});

    },


    renderArticles() {

        // Get articles from this.data.articles

        return this.data.articles.map((article) => {

            return <Article

                key={article._id} article={article}

            />;

        });

    },


    render() {

        return (

            <div className="container">

                    <h1>Article List</h1>

                    <button type="button" ref="inspirationButton" onClick={this.toggleButton}>toggle inspiration articles</button>

                <ul>

                    {this.renderArticles()}

                </ul>

            </div>

        );

    }

});
