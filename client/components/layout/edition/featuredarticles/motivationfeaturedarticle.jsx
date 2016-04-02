MotivationFeaturedArticle = React.createClass({

    propTypes: {

        // This component gets the articles to display through a React prop.

        // We can use propTypes to indicate it is required

        article: React.PropTypes.object.isRequired

    },

    render() {

        var article = {

            flexOrder: '2',
            height: '45.125%',
            minWidth: '31.66%'


        };

        var motivationFeaturedContainer = {



            margin: 'auto',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(//lorempixel.com/640/480/business/)',
            position: 'relative'

        };

        var motivationFeaturedArticleColumnBox ={

            left: '5%',
            top: '65%',
            position: 'absolute',
            width: '80px',
            height: '20px',
            backgroundColor:'#F69E35',


        };

        var motivationFeaturedArticleTitleBox = {

            width: '100%',
            height: '30%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            position: 'absolute',
            top: '70%',

        };

        var motivationFeaturedArticleColumnBoxText = {

            textAlign: 'center',
            color: 'white'

        };

        var h1 = {

            left: '5%',
            position: 'absolute',
            color: 'white'

        };

        var motivationFeaturedArticleContent ={

            display: 'none'

        };



        return (
            <article style ={article}>
                <div style={motivationFeaturedContainer}>



                    <div style={motivationFeaturedArticleTitleBox}>
                        <h1 style={h1}>
                            {this.props.article.articleTitle}
                        </h1>
                    </div>

                    <div style={motivationFeaturedArticleColumnBox}>
                        <div style={motivationFeaturedArticleColumnBoxText}>
                            {this.props.article.articleColumn}
                        </div>
                    </div>

                    <div style={motivationFeaturedArticleContent}>

                        {this.props.article.articleIntro}

                    </div>



                </div>
            </article>
        );

    }

});

