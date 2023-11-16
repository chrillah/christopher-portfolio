import { Link } from 'react-router-dom'

function HomePage() {
    const year = new Date()
    return (
        <div className="menu-home">
            <div className="logo">
            <p className="hero-name">Christopher Rönnberg</p>
            <div className="hidden-div"></div>
            <p className='animated-c'>C</p>
            <p className='animated-r'>R</p>
            </div>
            <p className="portfolio-presentation">{year.getFullYear()} Portfolio</p>
            <ul className="link-container add-pad">
                <li>
                    <Link className="link-button" to="/about">
                        <p>About me</p>
                    </Link>
                </li>
                <li>
                    <Link className="link-button" to="/projects">
                        <p>Projects</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage
