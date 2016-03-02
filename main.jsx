// This is inside main.jsx



Articles = new Mongo.Collection("articles");

MainLayout = React.createClass({
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <div className="container">
                    {this.props.content}
                </div>
                <Footer />
            </div>
)
}
});
