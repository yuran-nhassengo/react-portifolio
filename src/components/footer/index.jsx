import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 min-h-24 flex items-center">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center space-x-6">
                <a
                    href="https://github.com/yuran-nhassengo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 text-lg font-medium"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/yuran-nhassengo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 text-lg font-medium"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
};

export default Footer;
