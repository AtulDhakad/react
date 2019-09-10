import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Footer extends Component {
  render () {
  return(<div><footer className="navbar-fixed-bottom">
					<div className="container">
						<div className="row">
							<p>Don't miss my site: <a href="www.devbutze.com">DevButze</a> </p>
						</div>
					</div>
				</footer></div>);
  }
}

export default Footer;
