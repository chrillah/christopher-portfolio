import { Link } from 'react-router-dom'

function HomePage() {
    const year = new Date()
    return (
        <div className="menu-home">
            {/* <h1 className='hero-title-1'>Christopher Rönnberg</h1>
            <h1 className='hero-title-2'>{year.getFullYear()} Portfolio</h1> */}

            <h1 className="hero-title">Christopher Rönnberg</h1>
            <h1 className="hero-title-3">{year.getFullYear()} Portfolio</h1>
            {/* <div className="gradient-bg"></div> */}
            <ul className="link-container">
                <li>
                    <Link className="link-button" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="link-button" to="/projects">
                        Projects
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage
