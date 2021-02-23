import React from 'react'

const Link = ({href, style, children}) => {

    const onLinkClick = (event) => {

        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();

        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onLinkClick} href={href} className={style}>
            {children}
        </a>
    );
}

export default Link;