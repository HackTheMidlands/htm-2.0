import React from 'react';

export const Container = ({ children }) => (
    <div
        style={{
            margin: '0 auto',
            width: '100vw',
            minHeight: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
        }}>
        {children}
    </div>
);

export const Content = ({ children }) => (
    <div
        style={{
            flex: "1 1 auto",
        }}>
        {children}
    </div>
);
