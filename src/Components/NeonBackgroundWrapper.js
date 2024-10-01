import React from 'react';
import './NeonBackgroundWrapper.css'; // Import the CSS file

const NeonBackgroundWrapper = ({ children }) => {
    return (
        <div className="neon-background-wrapper">
            {children}
        </div>
    );
};

export default NeonBackgroundWrapper;
