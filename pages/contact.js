import Head from 'next/head';
import Header from '../components/header';

const React = require('react');

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <Head>
                    <title>
                        Contact
                    </title>
                </Head>

                <Header title='Contact'/>

                <ul>
                    <li><a href='mailto:jvscirilo12@gmail.com' type='email'>E-mail</a></li>
                    <li><a href='https://www.linkedin.com/in/jo%C3%A3o-victor-53b48a23b/'>LinkedIn</a></li>
                </ul>
            </React.Fragment>
        );
    }
}

export default Contact;