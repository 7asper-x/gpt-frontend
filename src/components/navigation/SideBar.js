import React from 'react';

const SideBar = ({clearChat}) => {
    return (
        <aside className="side-menu">
            <div className="side-menu-button" onClick={clearChat}>
                <span>+</span>
                New Chat
            </div>
        </aside>
    )
};

export default SideBar;