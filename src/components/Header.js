import React from 'react'
import Link from './Link';
import Route from './Route';

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link href="/" style="item">
                Accordion
            </Link>
            <Link href="/search" style="item">
                Search
            </Link>
            <Link href="/dropdown" style="item">
                Dropdown
            </Link>
            <Link href="/translate" style="item">
                Translate
            </Link>
        </div>
    );
}

export default Header;