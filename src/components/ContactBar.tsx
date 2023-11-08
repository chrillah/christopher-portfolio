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
