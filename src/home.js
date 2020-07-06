import React from 'react';
import './App.css';
import './home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import ModelPopup from './containers/modelPopup';
import Footer from '../src/containers/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/containers/header';
import { products, responsive } from '../src/containers/constants';
import {
  Link
} from "react-router-dom";
import LiveChat from 'react-livechat'
import BackgroundImg from './images/bg.svg';
import { Button, badges } from 'react-bootstrap';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      productId: 0
    }
  }

  open = (id) => {
    console.log("product id : " + id)
    this.setState({
      showDialog: true,
      productId: id
    });
  }

  close = () => {
    this.setState({
      showDialog: false
    });
  }

  render() {

    return (

      <div className="App">
        <div className="Header">
          <img src={require('./images/retailIcon.png')} alt='logo' style={{ marginRight: "150px", width: "200px" }}></img>
          <span className="Home" style={{ display: "inline-block", margin: '20px', marginLeft: "-100px" }}>Home</span>
          <span className="Categories" style={{ display: "inline-block", margin: '20px' }}>Categories</span>
          <span className="Home" style={{ display: "inline-block", margin: '20px' }}>Products</span>
          <span className="Categories" style={{ display: "inline-block", margin: '20px' }}>Live Shopping</span>
          <span className="Categories" style={{ display: "inline-block", margin: '20px' }}>Contacts</span>
          <span className="Sign-In" style={{ display: "inline-block", margin: '30px', marginLeft: "550px" }}>Sign-In</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="19.5" fill="#fff" stroke="#265FF0" />
            <path fill="#265FF0" d="M25.54 28h-.159c-.047-.01-.094-.02-.142-.028-.632-.09-1.158-.553-1.321-1.161-.17-.63.046-1.297.573-1.681.19-.141.42-.23.607-.328h-6.814c.033.029.069.041.106.051.687.184 1.164.81 1.169 1.535.005.706-.476 1.346-1.155 1.533-.114.032-.231.053-.347.079h-.186c-.034-.009-.066-.02-.1-.025-.731-.098-1.307-.667-1.391-1.372-.09-.754.312-1.429 1.014-1.703.082-.033.168-.056.252-.084-.274-.029-.543-.018-.812-.03-.744-.035-1.337-.533-1.496-1.25-.157-.703.172-1.416.821-1.756.09-.047.095-.093.076-.175-.131-.583-.26-1.167-.39-1.75-.493-2.222-.989-4.443-1.479-6.667-.022-.103-.064-.122-.158-.122-.843.003-1.686-.007-2.528.006-.327.005-.56-.097-.68-.408v-.24c.108-.312.334-.426.655-.424 1.016.008 2.032.002 3.049.003.324 0 .516.15.588.464.114.497.232.992.33 1.492.03.152.087.185.231.185 4.203-.004 8.406-.003 12.608-.003h.147c.435.012.663.317.543.736-.698 2.45-1.398 4.897-2.104 7.344-.034.121-.12.237-.207.329-.111.116-.273.112-.426.112h-9.426c-.379 0-.625.206-.625.521.001.34.236.543.631.543H26.474c.344 0 .58.221.582.54.002.302-.243.523-.582.525l-.573.001c-.04 0-.08.005-.118.008.034.033.067.043.1.053.675.21 1.075.666 1.158 1.361.077.651-.191 1.165-.74 1.53-.23.152-.495.206-.76.256z" />
          </svg></span>
        </div>

        <div style={{ backgroundImage: "url(" + BackgroundImg + ")", backgroundRepeat: "" }} className="width-100">

          <div className="video-box">
            <iframe height="500" width="80%" frameBorder="0" title="videoStream" allow="fullscreen" style={{ borderRadius: 10 + "px" }}
              src="https://dist.bambuser.net/player/?resourceUri=https%3A%2F%2Fcdn.bambuser.net%2Fgroups%2F94697%2Fbroadcasts%3Fby_authors%3D%26title_contains%3D%26has_any_tags%3D%26has_all_tags%3D%26da_id%3D26b338c6-a4e3-8886-cefa-c400cf49144a%26da_timestamp%3D1593702116%26da_signature_method%3DHMAC-SHA256%26da_ttl%3D0%26da_static%3D1%26da_signature%3D20e03a4ae412b62723ec42f27f7b9b857a6d45f4ca556af57a7e6b9adfc9c60d"
              webkitallowfullscreen="true"></iframe>
          </div>
          <div className="product-carousel">
            <Carousel responsive={responsive} autoPlay={this.props.deviceType !== "mobile" ? true : false}
              infinite={true} containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={this.props.deviceType}>
              {products.map(el => (

                <button onClick={() => this.open(el.id)} className="Carousel-button">
                  <div className="Carousel-box">
                    <table>
                      <tbody style={{ margin: "0 auto" }}>
                        <tr>
                          <td><img src={require('./images/' + el.image)} className="Carousel-box-Img" alt="" /></td>
                          <td style={{ textAlign: "left" }}>
                            <span className="Carousel-box-decsription"> {el.shortDescription}</span><br></br>
                            <span className="badge">Category: {el.Category}</span><br></br>
                            <span style={{ color: "red" }}>Actual Price: ${el.listprice}</span> <br></br>
                            <span style={{ color: "green" }}>Selling Price: ${el.sellingprice}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </button>

              ))}

            </Carousel>
            <Dialog aria-label="" isOpen={this.state.showDialog} onDismiss={this.close} style={{ marginTop: '50vh' }}>
              <ModelPopup productId={this.state.productId} />
            </Dialog>
            <LiveChat license={12050871} />
          </div>
        </div>
        <div className="Footer">
          <p>&copy; thefamousretailers</p>
        </div>
      </div>

    );
  }
}

export default Home;
