import { useState, useEffect, useRef } from 'react'

function ContactBar() {
    const [contactOpen, setContactOpen] = useState(false)
    const contactRef = useRef<HTMLDivElement>(null)

    const closeContact = () => {
        setContactOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (
                contactRef.current &&
                !contactRef.current.contains(event.target as Node)
            ) {
                closeContact()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <div className="black-cover-footer"></div>
            <footer ref={contactRef} className="footer-bar-wrapper">
                <div className="footer-bar-container">
                    <button
                        className="on-site-button"
                        onClick={() => setContactOpen(!contactOpen)}
                    >
                        <div className={contactOpen ? 'rotate' : 'no-rotate'}>
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
                        Contact
                    </button>
                </div>

                <div
                    className={contactOpen ? 'contact-open' : 'contact-closed'}
                >
                    <ul className="contact-list">
                        <li className="contact-item">
                            <a href="tel:+46736703219" target="blanc">
                                <div id="mobile-icon"></div>
                                <p className="contact-info">+46 736 70 32 19</p>
                            </a>
                        </li>
                        <li className="contact-item">
                            <a
                                href="mailto:christopher.ronnberg@hotmail.com"
                                target="blanc"
                            >
                                <div id="mail-icon"></div>
                                <p className="contact-info">
                                    christopher.ronnberg @hotmail.com
                                </p>
                            </a>
                        </li>
                        <li className="contact-item">
                            <a
                                href="https://www.linkedin.com/in/christopher-r%C3%B6nnberg/"
                                target="blanc"
                            >
                                <div id="linkedin-icon"></div>
                                <p className="contact-info">
                                    https://www.linkedin.com/in
                                    /christopher-rönnberg/
                                </p>
                            </a>
                        </li>
                        <li className="contact-item">
                            <a
                                href="https://github.com/chrillah"
                                target="blanc"
                            >
                                <div id="github-icon"></div>
                                <p className="contact-info">
                                    https://github.com/chrillah
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default ContactBar
