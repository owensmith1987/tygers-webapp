StyleFeaturedArticle = React.createClass({

    propTypes: {

        // This component gets the articles to display through a React prop.

        // We can use propTypes to indicate it is required

        article: React.PropTypes.object.isRequired

    },

    render() {



        var article = {

            flexOrder: '4',
            marginLeft: '1%',
            marginRight:'1%',
            minHeight: '95%',
            minWidth: '15.833%'


        };

        var styleFeaturedContainer = {



            margin: 'auto',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(//lorempixel.com/640/480/fashion/)',
            position: 'relative'

        };

        var styleFeaturedArticleColumnBox ={

            left: '5%',
            top: '65%',
            position: 'absolute',
            width: '80px',
            height: '20px',
            backgroundColor:'#3ACBD0',


        };

        var styleFeaturedArticleTitleBox = {

            width: '100%',
            height: '30%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            position: 'absolute',
            top: '70%',

        };

        var styleFeaturedArticleColumnBoxText = {

            textAlign: 'center',
            color: 'white'

        };

        var styleFeaturedArticleContent ={

            display: 'none'

        };

        var h1 = {

            left: '5%',
            position: 'absolute',
            color: 'white'

        };


        return (
            <article style={article}>
                <div style={styleFeaturedContainer}>



                    <div style={styleFeaturedArticleTitleBox}>
                        <h1 style={h1}>
                            {this.props.article.articleTitle}
                        </h1>
                    </div>

                    <div style={styleFeaturedArticleColumnBox}>
                        <div style={styleFeaturedArticleColumnBoxText}>
                            {this.props.article.articleColumn}
                        </div>
                    </div>

                    <div style={styleFeaturedArticleContent}>

                        {this.props.article.articleIntro}

                    </div>



                </div>
            </article>
        );

    }

});

