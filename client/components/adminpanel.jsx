AdminPanel = React.createClass({


    // This mixin makes the getMeteorData method work

    mixins: [ReactMeteorData],

    getInitialState() {

        return {

            toggleInspiration: false,
            setArticleFeatured: false





        }

    },
    // Loads items from the Articles collection and puts them on this.data.articles

    getMeteorData() {

        let articleQuery = {};


        if (this.state.columnSelected == true) {

            // If hide completed is checked, filter tasks

            articleQuery = {articleColumn : "Inspiration"};

        }

        return {

            articles: Articles.find(articleQuery, {sort: {createdAt: -1}}).fetch(),


        };

    },
    toggleArticleFeatured()
    {
        this.setState({

            setArticleFeatured: ! this.state.setArticleFeatured

        });
    },




    handleSubmit(event) {

        event.preventDefault();

        // Find the text field via the React ref
        var articleTitle = React.findDOMNode(this.refs.articleTitleTextInput).value.trim();
        var articleColumn = React.findDOMNode(this.refs.articleColumnNameTextInput).value.trim();
        var articleIntro = React.findDOMNode(this.refs.articleIntroTextInput).value.trim();
        var articleContent = React.findDOMNode(this.refs.articleContentTextInput).value.trim();
        var articleAuthor = React.findDOMNode(this.refs.articleAuthorTextInput).value.trim();
        var articleReadingTime = React.findDOMNode(this.refs.articleReadingTimeTextInput).value.trim();



        Articles.insert({

            articleColumn: articleColumn,

            articleTitle: articleTitle,

            articleIntro: articleIntro,

            articleContent: articleContent,

            articleAuthor: articleAuthor,

            articleReadingTime: articleReadingTime,

            articleIsFeatured: this.state.setArticleFeatured,

            createdAt: new Date("<YYYY-mm-dd>") // cu

            // rrent time

        });

        // Clear form



        React.findDOMNode(this.refs.articleColumnNameTextInput).value = "";
        React.findDOMNode(this.refs.articleTitleTextInput).value = "";
        React.findDOMNode(this.refs.articleIntroTextInput).value = "";
        React.findDOMNode(this.refs.articleContentTextInput).value = "";
        React.findDOMNode(this.refs.articleAuthorTextInput).value = "";
        React.findDOMNode(this.refs.articleReadingTimeTextInput).value = "";

    },





    render() {

        return (

            <div className="container">

                <header>


                    <h2>Admin Panel</h2>
                    <p>Go ahead and try it out! fill out some fields and see the article appear on the "index"</p>



                    <form className="new-task" id="articleInputForm"  >

                        <input

                            type="text"

                            ref="articleColumnNameTextInput"

                            placeholder="Input Article Column Type" />

                        <input

                            type="text"

                            ref="articleTitleTextInput"

                            placeholder="Input Article Title" />

                        <input

                            type="text"

                            ref="articleIntroTextInput"

                            placeholder="Input Article Intro" />

                        <input

                            type="text"

                            ref="articleContentTextInput"

                            placeholder="Input Article Content" />

                        <input

                            type="text"

                            ref="articleAuthorTextInput"

                            placeholder="Input Article Author" />

                        <input

                            type="text"

                            ref="articleReadingTimeTextInput"

                            placeholder="Input Article ReadingTime" />



                    </form>

                    <button type="submit" form="articleInputForm" onClick={this.handleSubmit}>Submit</button>

                    <input

                        type="checkbox"

                        readOnly={true}

                        checked={this.state.setArticleFeatured}

                        onClick={this.toggleArticleFeatured} />

                </header>

                <ul>



                </ul>

            </div>

        );

    }

});

