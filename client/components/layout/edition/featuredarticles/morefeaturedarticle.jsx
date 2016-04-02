MoreFeaturedArticle = React.createClass({

    propTypes: {

        // This component gets the articles to display through a React prop.

        // We can use propTypes to indicate it is required

        article: React.PropTypes.object.isRequired

    },

    render() {



        var article = {

            flexOrder: '5',

            minHeight: '95%',
            minWidth: '15.833%'

        };

        var moreFeaturedContainer = {



            margin: 'auto',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(//lorempixel.com/640/480/nightlife/)',
            position: 'relative'

        };

        var moreFeaturedArticleColumnBox ={

            left: '5%',
            top: '65%',
            position: 'absolute',
            width: '80px',
            height: '20px',
            backgroundColor:'#C4CB3F',


        };

        var moreFeaturedArticleTitleBox = {

            width: '100%',
            height: '30%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            position: 'absolute',
            top: '70%',

        };

        var moreFeaturedArticleColumnBoxText = {

            textAlign: 'center',
            color: 'white'

        };

        var moreFeaturedArticleContent ={

            display: 'none'

        };

        var h1 = {

            left: '5%',
            position: 'absolute',
            color: 'white'

        };


        return (
            <article style ={article}>
                <div style={moreFeaturedContainer}>



                    <div style={moreFeaturedArticleTitleBox}>
                        <h1 style={h1}>
                            {this.props.article.articleTitle}
                        </h1>
                    </div>

                    <div style={moreFeaturedArticleColumnBox}>
                        <div style={moreFeaturedArticleColumnBoxText}>
                            {this.props.article.articleColumn}
                        </div>
                    </div>

                    <div style={moreFeaturedArticleContent}>

                        {this.props.article.articleIntro}

                    </div>



                </div>
            </article>
        );

    }

});

