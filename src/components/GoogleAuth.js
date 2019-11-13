import React, { Component } from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "268058020794-e2gtjo1fu096h88fjk79h7surph5bbjr.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.gauth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.gauth.isSignedIn.get());
          this.gauth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignInClick = () => {
    this.gauth.signIn();
  };

  onSignOutClick = () => {
    this.gauth.signOut();
  };

  onAuthChange = isSignedIn => {
    if (isSignedIn) this.props.signIn(this.gauth.currentUser.get().getId());
    else this.props.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
