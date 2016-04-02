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


            flexOrder:'3',
            minWidth: '25%',
            height: '300px'

        }

        var lifeArticleContainer = {


            margin: 'auto',
            width: '99%',
            height: '99%',
            backgroundColor: 'White',
            position: 'relative'

        };

        var lifeArticleColumnBox ={

            left: '5%',
            top: '65%',
            position: 'absolute',
            width: '80px',
            height: '20px',
            backgroundColor:'Gold',


        };

        var lifeArticleTitleBox = {

            width: '100%',
            height: '30%',
            backgroundColor: 'rgba(255,0,0,  1)',
            position: 'absolute',
            top: '70%',

        };

        var lifeArticleColumnBoxText = {

            textAlign: 'center',
            color: 'white'

        }

        var lifeArticleContent ={

            display: 'none'

        };

        var h1 = {

            left: '5%',
            position: 'absolute',
            color: 'white'

        }

        return (
            <article style={article}>
                <div style={lifeArticleContainer} className="article-container">



                    <div style={lifeArticleTitleBox}>

                        <h1 style={h1}>
                            {this.props.article.articleTitle}
                        </h1>

                    </div>

                    <div style = {lifeArticleColumnBox}>

                        <div style = {lifeArticleColumnBoxText} >
                            {this.props.article.articleColumn}
                        </div>

                    </div>


                    <div style ={lifeArticleContent}>
                        <p></p>
                        {this.props.article.articleContent}

                    </div>

                </div>
            </article>
        );

    }

});