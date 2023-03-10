import React from "react";

import {Link} from "react-router-dom";


const Header=()=>{
    return(
      <nav className=" navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>Students App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Anasayfa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/add-student"}>Öğrenci Ekle</Link>
            </li>
           
          </ul>
          
        </div>
      </div>
    </nav>
    )
}


export default Header;