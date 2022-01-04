import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div className="ui comments">

            <div className="comment">
                <a className="avatar">
                    <img alt="Avatar" />
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

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));