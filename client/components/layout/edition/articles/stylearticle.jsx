// Article component - represents a single article

StyleArticle = React.createClass({

    propTypes: {

        // This component gets the articles to display through a React prop.

        // We can use propTypes to indicate it is required

        article: React.PropTypes.object.isRequired

    },



    render()
    {
        var article = {


            flexOrder:'4',
            minWidth: '25%',
            height: '300px'

        }

        var styleArticleContainer = {


            margin: 'auto',
            width: '99%',
            height: '99%',
            backgroundColor: 'White',
            position: 'relative'

        };

        var styleArticleColumnBox ={

            left: '5%',
            top: '65%',
            position: 'absolute',
            width: '80px',
            height: '20px',
            backgroundColor:'Gold',


        };

        var styleArticleTitleBox = {

            width: '100%',
            height: '30%',
            backgroundColor: 'rgba(255,0,0,  1)',
            position: 'absolute',
            top: '70%',

        };

        var styleArticleColumnBoxText = {

            textAlign: 'center',
            color: 'white'

        }

        var styleArticleContent ={

            display: 'none'

        };

        var h1 = {

            left: '5%',
            position: 'absolute',
            color: 'white'

        }

        return (
            <article style={article}>
                <div style={styleArticleContainer} className="article-container">



                    <div style={styleArticleTitleBox}>

                        <h1 style={h1}>
                            {this.props.article.articleTitle}
                        </h1>

                    </div>

                    <div style = {styleArticleColumnBox}>

                        <div style = {styleArticleColumnBoxText} >
                            {this.props.article.articleColumn}
                        </div>

                    </div>


                    <div style ={styleArticleContent}>
                        <p></p>
                        {this.props.article.articleContent}

                    </div>

                </div>
            </article>
        );

    }

});