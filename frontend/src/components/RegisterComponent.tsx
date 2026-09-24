import React, { useState } from 'react';

type RegisterComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const RegisterComponent: React.FC<RegisterComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { _csrf, handleSubmit, msg } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="registercomponent-wrapper" onChange={handleInputChange}>
            <!doctype html>
        <html lang="en" xmlns:th="http://www.thymeleaf.org">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
                  integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
            <title>Document</title>
        </head>
        <body>
        
        <br>
        <div className="container">
            <div className="col-sm-6">
                <h3 style="margin-top: 10px">Sign Up Now</h3>
                <p>Please fill out this to register</p>
                <form onSubmit={handleSubmit} action="newuserregister" method="post">
                    <input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
                    <div className="form-group">
                        <label htmlFor="firstName">User Name</label>
                        <input type="text" name="username" id="firstName" required placeholder="Your Username*" required className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control form-control-lg" required minlength="6" placeholder="Email*" required name="email" id="email"
                               aria-describedby="emailHelp">
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                            anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control form-control-lg" required placeholder="Password*" required name="password"
                               id="password">
                    </div>
                    <div className="form-group">
                        <label htmlFor="Address">Address</label>
                        <textarea className="form-control form-control-lg" rows="3" placeholder="Enter Your Address" name="address"></textarea>
                    </div>
        <span style="margin-top: 10px">Already have an account <a className="linkControl" href="/">Login here</a></span> <br><br>
                    <input type="submit" value="Register" className="btn btn-primary btn-block" /><br>
                    <br><h3 style="color:red;">{msg}</h3>
                    <br>
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

export default RegisterComponent;
