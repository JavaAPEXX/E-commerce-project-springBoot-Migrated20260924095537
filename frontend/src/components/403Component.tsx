import React, { useState } from 'react';

type 403ComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const 403Component: React.FC<403ComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { background, display, font, max } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="403component-wrapper" onChange={handleInputChange}>
            <!DOCTYPE html>
        <html>
        <head>
        <meta charset="ISO-8859-1">
        <title>403 - Forbidden</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                color: #333;
                text-align: center;
                padding: 50px;
            }
        
            h1 {
                font-size: 3em;
                color: #e74c3c;
            }
        
            p {
                font-size: 1.5em;
                color: #555;
            }
        
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
            }
        
            .button {
                display: inline-block;
                margin-top: 20px;
                padding: 10px 20px;
                font-size: 1.2em;
                background-color: #3498db;
                color: white;
                text-decoration: none;
                border-radius: 5px;
            }
        
            .button:hover {
                background-color: #2980b9;
            }
        </style>
        </head>
        <body>
            <div className="container">
                <h1>403 - Forbidden</h1>
                <p>Sorry, you do not have permission to access this page.</p>
            </div>
        </body>
        </html>
        </div>
    );
};

export default 403Component;
