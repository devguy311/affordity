import React from "react";

interface ILinkMail {
    email: string;
    label: string;
}

const LinkMail = ({ email, label }: ILinkMail) => {
    return (
        <a
            href="#"
            onClick={(e) => {
                window.location.href = `mailto:${email}`;
                e.preventDefault();
            }}
            style={{ color: "#2e76b6", margin: 0 }}
        >
            {label}
        </a>
    );
};

export default LinkMail;
