import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/*SCROLLTOTOP component to force page to scroll to max Y when page is changed*/

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return <React.Fragment />
	}
}

export default withRouter(ScrollToTop)