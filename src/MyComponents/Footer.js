import React from 'react'

export const Footer = () => {
    let footerStyle ={
        position : "relative",
        top : "70vh",
        width: "100%",
        backgroundColor: "dark",
        text : "light"
    }
    let tc = {
        text: "text-center"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center" style={tc}>Copyright &copy; 2021  licenced to Abhigyan Gargav</p>
        </footer>
    );
}
