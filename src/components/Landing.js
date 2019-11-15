import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchImages } from "../actions";

class Landing extends Component {
  componentDidMount() {
    const imageIds = [
      "p6g6S_kXkFc",
      "-1_RZL8BGBM",
      "RLw-UC03Gwc",
      "ck0i9Dnjtj0"
    ];
    this.props.fetchImages(imageIds);
  }

  renderComposeMessage() {
    if (this.props.isSignedIn) {
      return "Compose a To-Do List!";
    } else {
      return "Compose Yours by Signing In";
    }
  }

  renderImages() {
    const { images } = this.props;
    if (images.length > 0) {
      return (
        <div className="ui stackable middle aligned four column centered padded grid">
          <div className="row">
            <div className="column">
              <img
                alt={images[0].alt_description}
                src={images[0].urls.regular}
              />
            </div>
            <div className="column">
              <img
                alt={images[1].alt_description}
                src={images[1].urls.regular}
              />
              <img
                alt={images[3].alt_description}
                src={images[3].urls.regular}
              />
            </div>
            <div className="column">
              <img
                alt={images[2].alt_description}
                src={images[2].urls.regular}
              />
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Listegy</h1>
          <p>
            <Link to="/lists" style={{ color: "#C70039" }}>
              Browse To-Do Lists
            </Link>
            <br /> or <br />
            {this.renderComposeMessage()}
          </p>
        </div>
        {this.renderImages()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, images: state.photos };
};

export default connect(
  mapStateToProps,
  { fetchImages }
)(Landing);
