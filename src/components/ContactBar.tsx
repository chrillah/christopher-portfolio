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

            <div className={contactOpen ? 'contact-open' : 'contact-closed'}>
                <ul className=""></ul>
            </div>
        </footer>
    )
}

export default ContactBar
