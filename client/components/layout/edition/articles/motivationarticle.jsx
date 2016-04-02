// Article component - represents a single article

MotivationArticle = React.createClass({

    propTypes: {

        // This component gets the articles to display through a React prop.

        // We can use propTypes to indicate it is required

        article: React.PropTypes.object.isRequired

    },



    render()
    {
        var article = {


            flexOrder:'2',
            minWidth: '25%',
            height: '300px'

        }

        var motivationArticleContainer = {


            margin: 'auto',
            width: '99%',
            height: '99%',
            backgroundColor: 'White',
            position: 'relative'

        };

        var motivationArticleColumnBox ={

            left: '5%',
            top: '65%',
            position: 'absolute',
            width: '80px',
            height: '20px',
            backgroundColor:'Gold',


        };

        var motivationArticleTitleBox = {

            width: '100%',
            height: '30%',
            backgroundColor: 'rgba(255,0,0,  1)',
            position: 'absolute',
            top: '70%',

        };

        var motivationArticleColumnBoxText = {

            textAlign: 'center',
            color: 'white'

        }

        var motivationArticleContent ={

            display: 'none'

        };

        var h1 = {

            left: '5%',
            position: 'absolute',
            color: 'white'

        }

        return (
            <article style={article}>
                <div style={motivationArticleContainer} className="article-container">



                    <div style={motivationArticleTitleBox}>

                        <h1 style={h1}>
                            {this.props.article.articleTitle}
                        </h1>

                    </div>

                    <div style = {motivationArticleColumnBox}>

                        <div style = {motivationArticleColumnBoxText} >
                            {this.props.article.articleColumn}
                        </div>

                    </div>


                    <div style ={motivationArticleContent}>
                        <p></p>
                        {this.props.article.articleContent}

                    </div>

                </div>
            </article>
        );

    }

});