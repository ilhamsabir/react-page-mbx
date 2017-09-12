import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mainpanel: panel.all
    }
  }

  _handleClickSideNav(name) {
    console.log(name);
    console.log(this.props);
  }

  render() {
    const listPanel = this.state.mainpanel.map((item, index) =>
        <div className="nav-item" key={index} data-name="heading" onClick={this._handleClickSideNav.bind(this, item.name)}>
          <i className={ item.icon }></i>
        </div>
    );
    return (
      <div className="">
         {listPanel}
      </div>
    );
  }
}

export default SideNav;
