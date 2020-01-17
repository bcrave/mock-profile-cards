import React, { Component } from "react";

import NavigationComponent from "./navigation/navigation-container";
import mockData from "./mock-data.json";
import ProfileCard from "./profile-data/profile-card";

export default class App extends Component {
  renderCards = () => {
    return mockData.popWarner.map((user) => {
      return (
        <div className="card-and-button">
          <ProfileCard key={user.name} user={user} />
          <div className="action-button">
            <button>ACTION</button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="app">
        <div className="navbar">
          <div className="navbar-left">
            <div>Descriptive Logo</div>
          </div>

          <div className="navbar-center">
            <NavigationComponent />
          </div>

          <div className="navbar-right">
            <div>User Name</div>
          </div>
        </div>

        <div className="profile-cards-wrapper">{this.renderCards()}</div>
        <div className="footer">
          <NavigationComponent />
          <div className="copyright-footer">
            <h1>copyright</h1>
          </div>
        </div>
      </div>
    );
  }
}
