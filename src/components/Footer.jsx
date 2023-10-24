import React from 'react';

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    return (
        <>
            <footer className="footer">
                <div className="order">
                    {isOpen ? (
                        <>
                            <p>
                                We're happy to serve you from {openHour}:00 to{' '}
                                {closeHour}:00, come visit us or order online
                            </p>
                            <button className="btn">Order Now</button>
                        </>
                    ) : (
                        <>
                            <p>
                                We're happy to welcom you between {openHour}:00
                                to {closeHour}:00 :)
                            </p>
                        </>
                    )}
                </div>
            </footer>
        </>
    );
};

export default Footer;
