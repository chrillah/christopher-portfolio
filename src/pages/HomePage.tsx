import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='menu-home'>
                            <ul className="link-container">
                        <li>
                            <Link
                                className="link-button"
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="link-button"
                                to="/projects"
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
    </div>
  )
}

export default HomePage
