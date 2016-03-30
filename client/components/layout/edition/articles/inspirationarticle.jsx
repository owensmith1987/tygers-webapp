// Article component - represents a single article

InspirationArticle = React.createClass({

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

        var inspirationArticleContainer = {

            display: 'block',
            margin: '0',
            margin: 'auto',
            width: '95%',
            height: '95%',
            backgroundColor: 'White',
            position: 'relative'

        };

        var inspirationArticleColumnBox ={

            left: '5%',
            top: '65%',
            position: 'absolute',
            width: '80px',
            height: '20px',
            backgroundColor:'Gold',


        };

        var inspirationArticleTitleBox = {

            width: '100%',
            height: '30%',
            backgroundColor: 'rgba(255,0,0,  1)',
            position: 'absolute',
            top: '70%',

        };

        var inspirationArticleColumnBoxText = {

            textAlign: 'center',
            color: 'white'

        }

        var inspirationArticleContent ={

            display: 'none'

        };

        var h1 = {

            left: '5%',
            position: 'absolute',
            color: 'white'

        }

        return (
            <article style={article}>
                <div style={inspirationArticleContainer} className="article-container">



                    <div style={inspirationArticleTitleBox}>

                        <h1 style={h1}>
                        {this.props.article.articleTitle}
                        </h1>

                    </div>

                    <div style = {inspirationArticleColumnBox}>

                        <div style = {inspirationArticleColumnBoxText} >
                            {this.props.article.articleColumn}
                        </div>

                    </div>


                    <div style ={inspirationArticleContent}>
                        <p></p>
                        {this.props.article.articleContent}

                    </div>

                </div>
            </article>
        );

    }

});