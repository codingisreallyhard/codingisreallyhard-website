import React from "react";
import "./PortofolioImage.css";

function PortofolioImage() {
  return (
    <section className="maindivimg">
      <div className="containerportofolioimg">
        <div className="box">
          <div className="imgBx">
            <img
              src={"https://i.ibb.co/T8T1S9t/reacteshop.png"}
              className="portofolioimg "
              alt="React E-shop"
            />
          </div>
          <div class="content">
            <div>
              <h2>React E-Shop</h2>
              <p className="portofolio1">Built using HTML,CSS,REACT</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img
              src="https://i.ibb.co/FzbJzfs/guessgame.png"
              className="portofolioimg"
              alt="Guess Game"
            />
          </div>
          <div className="content ">
            <div>
              <h2 className='portofolio2h2'>Guess Game</h2>
              <p className="portofolio2">Built using HTML,CSS,JAVASCRIPT</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img
              src="https://i.ibb.co/wSRvBTR/authapp.png"
              className="portofolioimg"
              alt="Auth app"
            />
          </div>
          <div className="content">
            <div>
              <h2>React Autenthication App</h2>
              <p>Built using HTML,CSS,REACT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortofolioImage;
