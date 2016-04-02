// This is inside main.jsx



Articles = new Mongo.Collection("articles");

MainLayout = React.createClass({
    render() {

        var mainWrapper= {

            top:'0px',
            left: '0px'
        }



        return (
            <div style={mainWrapper}>
                <Header />


                    {this.props.content}

                <Footer />
            </div>
)
}
});
