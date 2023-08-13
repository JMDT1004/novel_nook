import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a
                    href="https://github.com/jeremytboyer"
                    target="_blank"
                    rel="noopener noreferrer">JeremyBoyer

                </a>
                <a
                    href="https://github.com/jonjigoncalves"
                    target="_blank"
                    rel="noopener noreferrer">JonathanGoncalves

                </a>
                <a
                    href="https://github.com/jamilbarrett"
                    target="_blank"
                    rel="noopener noreferrer">JamilBarrett

                </a>
                <a
                    href="https://github.com/JMDT1004"
                    target="_blank"
                    rel="noopener noreferrer">JanoiThompson

                </a>
            </div>
            <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
    )
}

export default Footer;
