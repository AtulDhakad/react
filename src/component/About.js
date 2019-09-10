import React, {Component} from 'react'
import PropTypes from 'prop-types'

class About extends Component {
  
   tests(names){
   return "Hello "+ names;
}

  render () {
          const myname ='Hello aboutus Page';

    return(<div>
    <div className="container">
    <h1 className="font-weight-light">AboutUs Page { this.tests("amit") }</h1>
    <p className="lead">The background images for the slider are set directly in the HTML using inline CSS. The images in this snippet are from <a href="https://unsplash.com">Unsplash</a>!</p>
    </div></div>);
  }
}

export default About;
