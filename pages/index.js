const React = require("react");
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/header';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                
                <Head>
                    <title>Home</title>
                </Head>

                <Header title='Home'/>

                <div>
                    
                    <h2>Pages</h2>

                    <Link href={{ pathname: '/about' }}>
                        <a> About </a>
                    </Link>
                    
                    <br/>

                    <Link href={{ pathname: '/components/' }}>
                        <a> Components page </a>
                    </Link>

                    <br/>

                    <Link href={{ pathname: '/contact' }}>
                        <a> Contact </a>
                    </Link>

                </div>
            </React.Fragment>
        );
    }
}

export default App;