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
            <div className="transparent-cover-footer"></div>
            <footer ref={contactRef} className="footer-bar-wrapper">
                <div className="footer-bar-container">
                    <button
                        className="on-site-button"
                        onClick={() => setContactOpen(!contactOpen)}
                    >
                        <div className={contactOpen ? 'rotate' : 'no-rotate'}>
                            <div className="caret"></div>
                        </div>
                        Contact
                    </button>
                </div>

                <div
                    className={contactOpen ? 'contact-open' : 'contact-closed'}
                >
                    <ul className="contact-list">
                        <li className="contact-item">
                            <a href="tel:+46736703219">
                                {/* <div id="mobile-icon"></div> */}
                                <p className="contact-info">+46 736 70 32 19</p>
                                <div className="no-rotate">
                                    <div className="caret white"></div>
                                </div>
                            </a>
                        </li>
                        <li className="contact-item">
                            <a href="mailto:christopher.ronnberg@hotmail.com">
                                {/* <div id="mail-icon"></div> */}
                                <p className="contact-info">
                                    christopher.ronnberg @hotmail.com
                                </p>
                                <div className="no-rotate">
                                    <div className="caret white"></div>
                                </div>
                            </a>
                        </li>
                        <li className="contact-item">
                            <a
                                href="https://www.linkedin.com/in/christopher-r%C3%B6nnberg/"
                                target="blanc"
                            >
                                {/* <div id="linkedin-icon"></div> */}
                                <p className="contact-info">
                                    https://www.linkedin.com/in
                                    /christopher-rönnberg/
                                </p>
                                <div className="no-rotate">
                                    <div className="caret white"></div>
                                </div>
                            </a>
                        </li>
                        <li className="contact-item">
                            <a
                                href="https://github.com/chrillah"
                                target="blanc"
                            >
                                {/* <div id="github-icon"></div> */}
                                <p className="contact-info">
                                    https://github.com/chrillah
                                </p>
                                <div className="no-rotate">
                                    <div className="caret white"></div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default ContactBar
