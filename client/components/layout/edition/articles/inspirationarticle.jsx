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


            flexOrder:'1',
            minWidth: '25%',
            height: '300px'

        }

        var inspirationArticleContainer = {


            margin: 'auto',
            width: '99%',
            height: '99%',
            backgroundColor: 'White',
            position: 'relative'

        };

        var inspirationPictureContainer = {
            height: '50%',
            backgroundImage: 'url(//lorempixel.com/640/480/transport/)',
            backgroundSize: '100%',
        }

        var inspirationArticleColumnBox ={

            left: '5%',
            top: '140px',
            position: 'absolute',
            width: '80px',
            height: '20px',
            backgroundColor:'Gold',


        };

        var inspirationArticleTitleBox = {

            width: '100%',
            height: '50%',

            position: 'absolute',
            top: '50%',

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
           

        }

        var inspirationArticleReadingTime ={

            display: 'none'
        }

        var inspirationArticleAuthor = {

            display: 'none'
        }

        var inspirationArticleIntro ={

            display: 'none'
        }

        return (
            <article style={article}>
                <div style={inspirationArticleContainer} className="article-container">

                    <div style ={inspirationPictureContainer}>

                    </div>

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

                    <div style={inspirationArticleReadingTime}>

                        {this.props.article.articleReadingTime}

                    </div>

                    <div style={inspirationArticleAuthor}>

                        {this.props.article.articleAuthor}

                    </div>

                    <div style={inspirationArticleIntro}>

                        {this.props.article.articleIntro}

                    </div>

                </div>
            </article>
        );

    }

});