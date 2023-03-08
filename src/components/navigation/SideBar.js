import React, {useState} from 'react';

const SideBar = ({clearChat, toggleMode, logoMode, mode}) => {
    const [toggle, setToggle] = useState("open");

    function toggleSideBar() {
        setToggle((curr) => (curr === "open" ? "close" : "open"));
    }

    return (
        <nav className="side-menu" id={toggle}>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={logoMode} alt="logo"/>
                    </span>

                    <div className="text header-text">
                        <span className="name">ChatGPT</span>
                        <span className="profession">xs7asper</span>
                    </div>
                </div>
                <i className='bx bx-chevron-right toggle' onClick={toggleSideBar}></i>
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <li className="search-box">
                        <i className='bx bx-search icon'></i>
                        <input type="search" placeholder="Search..."></input>
                    </li>
                    <li className="nav-link">
                        <a href="/" onClick={clearChat}>
                            <i className='bx bx-edit-alt icon'></i>
                            <span className="text nav-text">Clear Chat</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-home-alt icon'></i>
                            <span className="text nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-bar-chart-alt-2 icon'></i>
                            <span className="text nav-text">Revenue</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Notification</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-pie-chart-alt icon'></i>
                            <span className="text nav-text">Analytics</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-heart icon'></i>
                            <span className="text nav-text">Likes</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="/">
                            <i className='bx bx-wallet icon'></i>
                            <span className="text nav-text">Wallets</span>
                        </a>
                    </li>
                </div>

                <div className="bottom-content">
                    <li className="">
                        <a href="/">
                            <i className='bx bx-log-out icon'></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>
                    <li className="mode">
                        <div className="moon-sun">
                            {
                                mode === "Light Mode" ? <i className='bx bx-moon icon moon'></i> : <i className='bx bx-sun icon sun'></i>
                            }
                        </div>
                        {
                            mode === "Light Mode" ? <span className="mode-text text">
                            Light Mode
                        </span> : <span className="mode-text text">
                            Dark Mode
                        </span>
                        }
                        <div className="toggle-switch" onClick={toggleMode}>
                            <span className="switch"></span>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    )
};

export default SideBar;