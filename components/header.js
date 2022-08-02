import Link from 'next/link';

const React = require('react');

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header>
                <Link href={{pathname: '/'}}>
                    <a> Home </a>
                </Link>
                <h1> {this.props.title} </h1>
            </header>
        );
    }
}

export default Header;