import { Link } from 'react-router-dom'

function HomePage() {
    const year = new Date()
    return (
        <div className="menu-home">
            <p className="hero-name">Christopher Rönnberg</p>
            <p className="hero-title-3">{year.getFullYear()} Portfolio</p>
            <ul className="link-container">
                <li>
                    <Link className="link-button" to="/about">
                        <p className="invert-color">About me</p>
                    </Link>
                </li>
                <li>
                    <Link className="link-button" to="/projects">
                        <p className="invert-color">Projects</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage
