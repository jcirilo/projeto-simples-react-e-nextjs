import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';


const React = require("react");

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Head>
                    <title> About </title>
                </Head>

                <Header title='About'/>

                <p>
                    I built this simple project to study Next.js and React :)
                </p>
            </React.Fragment>
        )
    }

}

export default About;