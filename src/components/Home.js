import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="68972371"
            title="Artis BT45 Retro Portable Wireless Bluetooth Speaker with Analog Control FM"
            price={2399.0}
            image="https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/A21TJRUUN4KGV/A3IAVFWXBMIVA2/e2608042-0866-405a-9060-4dfb87f587ce._CR0,0,970,300_PT0_SX970__.jpg"
            rating={3}
          />
          <Product
            id="452891341"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
            price={30990.0}
            image="https://m.media-amazon.com/images/S/aplus-media/sota/209da120-e7d0-44eb-b04f-26c36190c2eb.__CR0,0,970,600_PT0_SX970_V1___.png"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="89027841"
            title="Joe Biden: American Dreamer"
            price={3000}
            image="https://images-na.ssl-images-amazon.com/images/I/414+86apq9L._SX310_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="908765432"
            title="Moon Phases Wall Hanging (Gold)"
            price={1499}
            image="https://images-na.ssl-images-amazon.com/images/I/51QJoIsz7%2BL._SL1000_.jpg"
            rating={5}
          />
          <Product
            id="982321341"
            title="PIPER LONDON Analogue Men's Watch (Gold Dial)"
            price={389.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71xV7cXUkaL._UL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="8732187"
            title="boAt Rockerz 255 Pro+ Bluetooth in-Ear Headphone with Mic"
            price={1499}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Boat/255proplus/GW/Boat_v3_Gw_1242x450.jpg"
            rating={4}
          />
          <Product
            id="276267785"
            title="Introducing Echo Show 5 - Smart display with Alexa"
            price={4499.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61nqC1yXoCL._SL1000_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
