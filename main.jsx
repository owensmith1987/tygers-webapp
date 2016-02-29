// This is inside main.jsx



Articles = new Mongo.Collection("articles");

MainLayout = React.createClass({
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {this.props.content}
                </div>
                <Footer />
            </div>
)
}
});/**
 * Created by Vanessa on 2/27/2016.
 */
