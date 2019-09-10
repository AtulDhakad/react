import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from './Header';
class Main extends Component {
  render () {
return(<div>
  <Header />
<div className="container">
<h1 className="font-weight-light">Home Page</h1>
<p className="lead">The background images for the slider are set directly in the HTML using inline CSS. The images in this snippet are from <a href="https://unsplash.com">Unsplash</a>!</p>
</div></div>);
  }
}

export default Main;
