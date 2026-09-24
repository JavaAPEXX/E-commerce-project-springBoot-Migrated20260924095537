import React, { useState } from 'react';

type AdminhomeComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const AdminhomeComponent: React.FC<AdminhomeComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="adminhomecomponent-wrapper" onChange={handleInputChange}>
            <!doctype html>
        <html lang="en" xmlns:th="http://www.thymeleaf.org">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport"
        	content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet"
        	href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        	integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        	crossorigin="anonymous">
        <link rel="stylesheet"
        	href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        	integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
        	crossorigin="anonymous">
        <title>Document</title>
        </head>
        
        <body className="bg-dark">
        	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        		<div className="container-fluid">
        			<a className="navbar-brand" href="#"> <img
        				src="../static/images/logo.png" width="auto" height="40"
        				className="d-inline-block align-top" alt="" />
        			</a>
        			<button className="navbar-toggler" type="button" data-toggle="collapse"
        				data-target="#navbarSupportedContent"
        				aria-controls="navbarSupportedContent" aria-expanded="false"
        				aria-label="Toggle navigation">
        				<span className="navbar-toggler-icon"></span>
        			</button>
        
        			<div className="collapse navbar-collapse" id="navbarSupportedContent">
        				<ul className="navbar-nav mr-auto"></ul>
        				<ul className="navbar-nav">
        					<li className="nav-item active"><a className="nav-link" href="/admin/">Home
        							Page</a></li>
        					<li className="nav-item active"><a className="nav-link" href="/admin/logout">Logout</a></li>
        
        				</ul>
        
        			</div>
        		</div>
        	</nav>
        	<div className="jumbotron text-center">
        		<h1 className="display-4">Welcome Back, Admin</h1><hr>
        		<p>Manage your data from this Admin Panel</p>
        	</div><br>
        	<div className="container-fluid" >
        		<div className="row justify-content-center">
        			<div className="col-sm-3 pt-4">
        				<div className="card border border-info" style="background-color: white;">
        					<div className="card-body text-center">
        						<h4 className="card-title">Categories</h4>
        						<p>---------------------------------------------</p>
        						<p className="card-text">Manage the categories section here.</p>
        						<a href="/admin/categories" className="card-link btn btn-primary">Manage</a>
        
        					</div>
        				</div>
        			</div>
        			<div className="col-sm-3 pt-4">
        				<div className="card" style="background-color: white;">
        					<div className="card-body text-center">
        						<h4 className="card-title">Products</h4>
        						<p>---------------------------------------------</p>
        						<p className="card-text">Manage all the products here.</p>
        						<a href="/admin/products" className="card-link btn btn-primary">Manage</a>
        
        					</div>
        				</div>
        			</div>
        			<div className="col-sm-3 pt-4">
        				<div className="card" style="background-color: white;">
        					<div className="card-body text-center">
        						<h4 className="card-title">Customers</h4>
        						<p>---------------------------------------------</p>
        						<p className="card-text">Manage all the customer here.</p>
        						<a href="/admin/customers" className="card-link btn btn-primary">Manage</a>
        
        					</div>
        				</div>
        			</div>
        			
        			
        			
        		</div>
        	</div>
        
        
        
        	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        		integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        		crossorigin="anonymous"></script>
        	<script
        		src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        		integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        		crossorigin="anonymous"></script>
        	<script
        		src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        		integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        		crossorigin="anonymous"></script>
        </body>
        </html>
        </div>
    );
};

export default AdminhomeComponent;
