import React from 'react';
import '../../css/header.css'


function Header() {
    return(
        <>
            <header id="#top" className="header">
                <nav className="nav-header">
                    <div className="div-header">
                        <a href="#top" className="top-S">SPLUGA</a>
                            <div className="nav-right-1">
                                <a href="#what-is-spluga" className="top-W">WHAT IS SPLUGA?</a>
                                <a href="#how-does-it-work" className="top-H">HOW DOES IT WORK?</a>
                                <a href="#join-us" className="top-J" id="top-J">JOIN US!</a>
                            </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
