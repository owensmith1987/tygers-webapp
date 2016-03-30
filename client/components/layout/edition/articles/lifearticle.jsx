// Article component - represents a single article

LifeArticle = React.createClass({

    propTypes: {

        // This component gets the articles to display through a React prop.

        // We can use propTypes to indicate it is required

        article: React.PropTypes.object.isRequired

    },



    render()
    {
        var article = {
            minWidth: '300px',
            width: '25%',
            height: '300px'

        }

        var lifeArticleContainer = {

            display: 'block',
            margin: '0',
            margin: 'auto',
            width: '95%',
            height: '95%',
            backgroundColor: 'CadetBlue'

        };

        return (
            <article style={article}>
                <div style={lifeArticleContainer} className="article-container">

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