import React from "react"
const Footer =()=>{
    return(

    <div className="footer text-white bg-dark py-2">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-lg-6 mx-auto">
                    <span style={{fontSize:'14px'}}>@ NewsExpress by Pradip singh </span>
                </div>
                
                <div className="col-md-8 col-lg-6 mx-auto text-end">
                    <span style={{fontSize:'14px'}} className="me-2">Follow us on </span>
                    <a href="https://github.com/PradipDesigner" target="_blank" className="me-2 text-white"><i className="bi bi-github"></i></a>
                    <a href="/" className="me-2 text-white"><i className="bi bi-instagram"></i></a>
                    <a href="/" className="text-white"><i className="bi bi-twitter-x"></i></a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer