import React, { useState } from 'react';

type IndexComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const IndexComponent: React.FC<IndexComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { height, max, padding, product, products, username } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="indexcomponent-wrapper" onChange={handleInputChange}>
            <!doctype html>
        <html lang="en" xmlns:th="http://www.thymeleaf.org"
              xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity3">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
                  integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
                  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
            <title>Document</title>
            
        </head>
        <body>
        
        <section className="wrapper">
                <div className="container-fostrap">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img th:src="@{/images/logo.png}"  src="../static/images/logo.png" width="auto" height="40" className="d-inline-block align-top" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        		
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <h4>Welcome { username } </h4>
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" th:href="@{/}" href="#">CART</a>
                        </li>
                         <li className="nav-item active">
                            <a className="nav-link" href="profileDisplay" >Profile</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" sec:authorize="isAuthenticated()" href="logout">Logout</a>
                        </li>
                       
                    </ul>
        
                </div>
            </div>
        </nav>
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Perishable Shop</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
          <style>
            body {
              padding: 20px;
            }
             .card-body {
                  height: 250px; /* Set a fixed height for the card body */
                }
        
                .card-img-top {
                  max-height: 100px; /* Limit the height of the product image */
                  object-fit: contain;
                }
        
          </style>
        </head>
        <body className="bg-light">
          <header>
        
          </header>
          <main>
        
            <div className="container">
              <h1>Welcome to Perishable Shop</h1>
        
        
              <div className="row">
              <c:forEach var="product" items={products}>
                <div className="col-md-3">
                  <div className="card mb-4">
                    <img className="card-img-top" src={product.image} alt="Product 1" />
                    <div className="card-body">
                     <b> <h4 className="card-title">{product.name}</h4></b>
                      <h5 className="card-text">Category: {product.category.name}</h5>
                      <h5 className="card-text">Price: {product.price}</h5>
                      <p className="card-text">Description: {product.description}</p>
                      <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                  </div>
                </div> ))}
              </div>
        
            </div>
          </main>
          <footer>
            <div className="container">
              <p>&copy; 2023 Perishable Shop. All rights reserved
        
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
        </html>
        </div>
    );
};

export default IndexComponent;
