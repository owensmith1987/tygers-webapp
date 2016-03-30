// This is inside main.jsx



Articles = new Mongo.Collection("articles");

MainLayout = React.createClass({
    render() {

        var basicBackground = {

            backgroundColor: '#C3C3C3'

        };


        return (
            <div style={basicBackground}>
                <Header />


                    {this.props.content}

                <Footer />
            </div>
)
}
});
