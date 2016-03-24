// This is inside main.jsx



Articles = new Mongo.Collection("articles");

MainLayout = React.createClass({
    render() {
        return (
            <div>
                <Header />


                    {this.props.content}

                <Footer />
            </div>
)
}
});
