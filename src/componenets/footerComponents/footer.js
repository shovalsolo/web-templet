//Footer Componenet

import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="flex flex-jus-spa-aro wcolor">
          <div className="">
            <p className="" >Solo-Tech Design 2017</p>
            <p className="" >Powerd by React</p>
            <p className="" >Shovalso@gmail.com</p>
            <p className="" >(647)9890841</p>
            <p className="" >Toronto - Canada</p>
          </div>

          <div className="flex flex-center">
            <img src={require("../../Assets/img/logo-device-text.JPG")} />
          </div>

          <div className="">
            <p className="" ><i className="fa fa-facebook" aria-hidden="true"></i> - Facebook</p>
            <p className="" ><i className="fa fa-twitter" aria-hidden="true"></i> - Twitter</p>
            <p className="" ><i className="fa fa-instagram" aria-hidden="true"></i> - Instagram</p>
            <p className="" ><i className="fa fa-pinterest" aria-hidden="true"></i> - Pinterest</p>
            <p className="" ><i className="fa fa-google-plus" aria-hidden="true"> - Google</i></p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
