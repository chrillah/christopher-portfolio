import { useState, useEffect, useRef } from 'react'
import { Link, useLocation  } from 'react-router-dom'

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const location = useLocation();
    const shouldNotBeVisible = location.pathname === '/';

    const closeMenu = () => {
        setMenuOpen(false)
    }
    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                closeMenu()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    if (shouldNotBeVisible) {
        return null;
    }

    return (
        <>
            <div className="black-cover-nav"></div>
            <div className="transparent-cover-nav"></div>
            <nav ref={menuRef} className="nav-bar-wrapper">
                <div className="nav-bar-container">
                    <Link
                        onClick={() => setMenuOpen(false)}
                        // className="link-logo"
                        className='nav-bar-logo'
                        to="/"
                    >
                        CR
                    </Link>
                    <button
                        className="on-site-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className={menuOpen ? 'rotate' : 'no-rotate'}>
                            <div className="caret"></div>
                        </div>
                        Menu
                    </button>
                </div>
                <div className={menuOpen ? 'menu-open' : 'menu-closed'}>
                    <ul className="link-container">
                        <li>
                            <Link
                                onClick={() => setMenuOpen(false)}
                                className="link-button"
                                to="/about"
                            >
                                <p>About me</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setMenuOpen(false)}
                                className="link-button"
                                to="/projects"
                            >
                                <p>Projects</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
