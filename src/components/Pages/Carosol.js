import React from "react";
import "./Carosol.css";

const Carasol = () => {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={'https://www.handong.edu/handongin/101/images/sub02_2.jpg'}
              alt="Los Angeles"
              className="d-block"
            />
          </div>
          <div className="carousel-item">
            <img
              src={'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/12rZ/image/_Ts0k38cZIwV57DO1yDTu51R4DI.jpg'}
              alt="Chicago"
              className="d-block"
            />
          </div>
          <div className="carousel-item">
            <img
              src={'https://online.fliphtml5.com/nmlnf/gafw/files/large/1.webp'}
              alt="New York"
              className="d-block"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Carasol;
