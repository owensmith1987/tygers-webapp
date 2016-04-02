LifeFeaturedArticle = React.createClass({

    propTypes: {

        // This component gets the articles to display through a React prop.

        // We can use propTypes to indicate it is required

        article: React.PropTypes.object.isRequired

    },

    render()
    {
        var article = {

            flexOrder:'3',

            height: '45.125%',
            minWidth: '31.66%'

        };

        var lifeArticleContainer = {




            margin: 'auto',
            width: '100%',
            height: '100%',

            backgroundImage: 'url(//lorempixel.com/640/480/city/)',

            position: 'relative'

        };

        var lifeArticleColumnBox ={

            left: '5%',
            top: '65%',
            position: 'absolute',
            width: '80px',
            height: '20px',
            backgroundColor:'#11867C',


        };

        var lifeArticleTitleBox = {

            width: '100%',
            height: '30%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            position: 'absolute',
            top: '70%',

        };

        var lifeArticleColumnBoxText = {

            textAlign: 'center',
            color: 'white'

        };

        var lifeArticleContent ={

            display: 'none'

        };

        var h1 = {

            left: '5%',
            position: 'absolute',
            color: 'white'

        };

        return (
            <article style={article}>
                <div style={lifeArticleContainer}>



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


                    <div style={lifeArticleContent}>

                        {this.props.article.articleContent}

                    </div>

                </div>
            </article>
        );

    }

});

