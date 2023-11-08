import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

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


    return (
        <nav ref={menuRef} className="nav-bar-wrapper">
            <div className="nav-bar-container">
                <Link
                    onClick={() => setMenuOpen(false)}
                    className="link-logo"
                    to="/"
                >
                    About
                </Link>
                <button
                    className="on-site-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className={menuOpen ? 'rotate' : 'no-rotate'}>
                        <svg
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24.98 42.21"
                        >
                            <polyline
                                className="arrow"
                                points="2.38 .89 22.6 21.11 2.38 41.32"
                            />
                        </svg>
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
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            className="link-button"
                            to="/projects"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
