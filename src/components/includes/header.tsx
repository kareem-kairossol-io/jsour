import { useState } from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showDrop, setShowDrop] = useState(false)
    return (
        <header>
            <div className="top">
                <div className="container">
                    <img src={logo} alt="" className="logo" />
                    <div>
                        <a href="tel:01044479475">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            </svg>
                            01044479475
                        </a>
                        <a href="mailto:info@jusoor.com.eg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                            </svg>
                            info@jusoor.com.eg
                        </a>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        10 El-Batal Ahmed Abd El-Aziz Street, Mohandessin, Giza
                        </p>
                    </div>
                    <div className="language_select">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                        </svg>
                            English
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6 9l6 6l6 -6" />
                        </svg>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <div className={"links" + (isOpen ? " open" : '')}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/solutions'}>How We Work</Link>
                    <div className="has-drop">
                        <p onClick={() => {setShowDrop(!showDrop)}} style={{cursor: 'pointer'}}>
                            Insurance Coverage
                        </p>
                        {
                            showDrop && (
                                <div className="drop" onClick={() => {setShowDrop(!showDrop)}}>
                                    <Link to={'/Life-Insurance'} >Life Insurance</Link>
                                    <Link to={'/Medical-Insurance'}>Medical Insurance</Link>
                                    <Link to={'/Accident-Insurance'}>Accident Insurance</Link>
                                    <Link to={'/Investment-Insurance'}>Investment Insurance</Link>
                                    <Link to={'/Motor-Insurance'}>Motor Insurance</Link>
                                    <Link to={'/Cargo-Insurance'}>Cargo Insurance</Link>
                                    <Link to={'/Hull-Insurance'}>Hull Insurance</Link>
                                    <Link to={'/Aviation-Insurance'}>Aviation Insurance</Link>
                                    <Link to={'/Engineering-Insurance'}>Engineering Insurance</Link>
                                    <Link to={'/Oil-&-Gas-Insurance'}>Oil & Gas Insurance</Link>
                                    <Link to={'/Fire-Insurance'}>Fire Insurance</Link>
                                    <Link to={'/Misellineous-Insurance'}>Misellineous Insurance</Link>
                                    <Link to={'/non-payment-risks-insurance'}>Insurance against non-payment risks</Link>
                                    <Link to={'/Cyber-insurance'}>Cyber insurance</Link>
                                </div>
                            )
                        }
                    </div>
                    <Link to={'/Customer-Rights'}>Customer Rights</Link>
                    <Link to={'/Customer-Complaints'}>Customer Complaints</Link>
                    <Link to={'/contact'}>Contact Us</Link>
                    </div>
                    <button className="show-mobile-menu" onClick={() => {
                        setIsOpen(!isOpen)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;