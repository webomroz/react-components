import React from "react";
import faker from "faker";


const CommentDetail = () => {

    return (
        <div className="comment">
            <a className="avatar">
                <img alt="Avatar" crossOrigin="anonymous" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a className="author">Adil</a>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                    How artistic!
                </div>

            </div>
        </div>
    );
};

export default CommentDetail;