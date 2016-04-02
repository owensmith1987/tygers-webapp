InspirationFeaturedArticle = React.createClass({

    propTypes: {

        // This component gets the articles to display through a React prop.

        // We can use propTypes to indicate it is required

        article: React.PropTypes.object.isRequired

    },



    render() {



        var article = {

            flexOrder:'1',
            marginRight: '1%',
            minHeight:'95%',
            minWidth: '31.66%'

        };

        var inspirationFeaturedContainer = {



            margin: 'auto',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(//lorempixel.com/640/480/transport/)',
            position: 'relative'

        };

        var inspirationFeaturedArticleColumnBox ={

            left: '5%',
            top: '65%',
            position: 'absolute',
            width: '20%',
            height: '7%',
            backgroundColor:'#F6CA00',


        };

        var inspirationFeaturedArticleTitleBox = {

            width: '100%',
            height: '30%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            position: 'absolute',
            top: '70%',

        };

        var inspirationFeaturedArticleColumnBoxText = {

            textAlign: 'center',
            color: 'white'

        };

        var inspirationFeaturedArticleContent ={

            display: 'none'

        };

        var inspirationFeaturedArticleReadingTime ={

            display: 'none'
        }

        var inspirationFeaturedArticleAuthor = {

            display: 'none'
        }

        var inspirationFeaturedArticleIntro ={

            display: 'none'
        }

        var inspirationH1 = {

            left: '5%',
            position: 'absolute',
            color: 'white'

        };


        return (
            <article style={article}>
                <div style={inspirationFeaturedContainer}>



                    <div style={inspirationFeaturedArticleTitleBox}>
                        <h1 style={inspirationH1}>
                        {this.props.article.articleTitle}
                        </h1>
                    </div>

                    <div style={inspirationFeaturedArticleColumnBox}>
                        <div style={inspirationFeaturedArticleColumnBoxText}>
                            {this.props.article.articleColumn}
                        </div>
                    </div>

                    <div style={inspirationFeaturedArticleContent}>

                        {this.props.article.articleContent}

                    </div>

                    <div style={inspirationFeaturedArticleReadingTime}>

                        {this.props.article.articleReadingTime}

                        </div>

                    <div style={inspirationFeaturedArticleAuthor}>

                        {this.props.article.articleAuthor}

                    </div>

                    <div style={inspirationFeaturedArticleIntro}>

                        {this.props.article.articleIntro}

                    </div>



                </div>
            </article>
        );

    }

});

