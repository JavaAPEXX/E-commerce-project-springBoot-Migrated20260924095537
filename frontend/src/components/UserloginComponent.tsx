import React, { useState } from 'react';

type UserloginComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const UserloginComponent: React.FC<UserloginComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { _csrf, background, border, display, handleSubmit, max, msg } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="userlogincomponent-wrapper" onChange={handleInputChange}>
            <!doctype html>
        <html lang="en" xmlns:th="http://www.thymeleaf.org">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
                  integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
            <title>User Login</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f8f9fa;
                }
                .login-container {
                    max-width: 400px;
                    width: 100%;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    border-radius: 8px;
                    background: white;
                }
                .login-container .jumbotron {
                    border-radius: 8px;
                }
                .input-group-text {
                    background-color: #007bff;
                    color: white;
                    border-radius: 0.25rem 0 0 0.25rem;
                }
                .input-group-prepend .input-group-text {
                    border-right: 0;
                }
                .form-control {
                    border-radius: 0 0.25rem 0.25rem 0;
                }
            </style>
        </head>
        <body>
        
        <div className="login-container p-4">
            <div className="jumbotron border p-4">
                <h2 className="text-center">User Login</h2>
                <form onSubmit={handleSubmit} action="/userloginvalidate" method="post">
                    <input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" name="username" id="username" placeholder="Username*" required className="form-control form-control-lg" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-lock"></i></span>
                            </div>
                            <input type="password" className="form-control form-control-lg" placeholder="Password*" required name="password" id="password" />
                        </div>
                    </div>
                    <span>Don't have an account? <a className="linkControl" href="/register">Register here</a></span> <br><br>
                    <input type="submit" value="Login" className="btn btn-primary btn-block" />
                    <h3 className="text-center text-danger mt-3">{msg}</h3>
                </form>
            </div>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
        </html>
        </div>
    );
};

export default UserloginComponent;
