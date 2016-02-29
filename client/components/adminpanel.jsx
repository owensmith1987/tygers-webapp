AdminPanel = React.createClass({


    // This mixin makes the getMeteorData method work

    mixins: [ReactMeteorData],

    getInitialState() {

        return {

            toggleInspiration: false




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


    handleSubmit(event) {

        event.preventDefault();

        // Find the text field via the React ref
        var articleTitle = React.findDOMNode(this.refs.articleTitleTextInput).value.trim();
        var articleColumn = React.findDOMNode(this.refs.articleColumnNameTextInput).value.trim();
        var articleIntro = React.findDOMNode(this.refs.articleIntroTextInput).value.trim();
        var articleContent = React.findDOMNode(this.refs.articleContentTextInput).value.trim();



        Articles.insert({

            articleColumn: articleColumn,

            articleTitle: articleTitle,

            articleIntro: articleIntro,

            articleContent: articleContent,

            createdAt: new Date("<YYYY-mm-dd>") // current time

        });

        // Clear form



        React.findDOMNode(this.refs.articleColumnNameTextInput).value = "";
        React.findDOMNode(this.refs.articleTitleTextInput).value = "";
        React.findDOMNode(this.refs.articleIntroTextInput).value = "";
        React.findDOMNode(this.refs.articleContentTextInput).value = "";


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



                    </form>

                    <button type="submit" form="articleInputForm" onClick={this.handleSubmit}>Submit</button>

                </header>

                <ul>



                </ul>

            </div>

        );

    }

});

