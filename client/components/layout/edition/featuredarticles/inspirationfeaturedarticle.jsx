InspirationFeaturedArticle = React.createClass({

    propTypes: {

        // This component gets the articles to display through a React prop.

        // We can use propTypes to indicate it is required

        article: React.PropTypes.object.isRequired

    },



    render() {

        var inspirationFeaturedContainer = {

            backgroundColor: 'yellow',
            width: '500px'



        };

        return (
            <article>
                <div style={inspirationFeaturedContainer}>

                    <div className="article-column-type">

                        {this.props.article.articleColumn}

                    </div>

                    <div className="article-title">

                        {this.props.article.articleTitle}

                    </div>

                    <div className="article-date">

                        {this.props.article.createdAt.toDateString()}

                    </div>

                    <div className="article-content">
                        <p></p>
                        {this.props.article.articleIntro}

                    </div>



                </div>
            </article>
        );

    }

});

