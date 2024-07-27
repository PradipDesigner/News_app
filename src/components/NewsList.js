import React from "react";
const NewList = (props) => {
    // const { title, description, imgUrl, url, publicDate, author, source } = thprops;
    return (
        <div className="flex-column flex-lg-row flex-md-column news-card w-100">
            <div className="new-img">
                <img src={props.imgUrl ? props.imgUrl : 'https://test-new-insight.corpository.com/assets/images/Not-available.svg'} alt="Not-available-img" className="img-fluid" />
            </div>
            <div className="news-content">
                <span className="badge bg-danger text-white position-absolute bottom-0 end-0">{props.source}</span>
                <h6 className="company-newsName">{props.title}</h6>
                <p>{props.description}
                    <a href={props.url} rel="noreferrer" target="_blank">More</a></p>
                <span>{props.author} | <strong>{new Date(props.publicDate).toDateString()}</strong></span>
            </div>
        </div>
    )
}
export default NewList
