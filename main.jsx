// This is inside main.jsx



Articles = new Mongo.Collection("articles");

MainLayout = React.createClass({
    render() {
        return (
            <div>
                <Header />
                <Navigation />

                <section>
                    {this.props.content}
                </section>
                <Footer />
            </div>
)
}
});
