Navigation = React.createClass({
    render() {

        var nav = {


            height: '60px',
            width: '100%',
            zIndex: '9999',
            backgroundColor: 'White'


        };

        var navUl = {
            display: 'flex',
            color:'black',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
        };

        var navLi = {

            color:'black',
            minWidth: '150px'

        };

        var navLiSearchbar = {

            width:'350'
        }
        var navA = {

            color:'black',
            textDecoration: 'none'
        }

        return (

            <nav style={nav}>

                <ul style={navUl}>
                    <li style={navLi}>
                        <a style={navA} href="/admin">Logo</a>
                    </li>
                    <li style={navLi}>
                        <a style={navA} href="/">EDITIE#1</a>
                    </li>
                    <li style={navLi}>
                        <a style={navA} href="/">Inhoud</a>
                    </li>
                    <li style={navLi}>
                           <div style ={navLiSearchbar}>
                                <a style={navA} href="/">Searchbar</a>
                            </div>
                    </li>
                    <li style={navLi}>
                        <a style={navA} href="/">Archief</a>
                    </li>
                    <li style={navLi}>
                        <a style={navA} href="/">Faforieten</a>
                    </li>
                    <li style={navLi}>
                        <a style={navA} href="/">User</a>
                    </li>
                </ul>
            </nav>
        )
    }
});