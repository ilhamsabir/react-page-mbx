import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import ElementContent from "./content/ElementContent.jsx"
import LayoutContent from "./content/LayoutContent.jsx"
import { clickPanel, dragElement, sortTable } from "./../helper/Global.jsx"
import ListPanel from "./list/ListPanel.jsx"


@inject('store') @observer
class Panel extends Component {
  constructor(props) {
    super(props)    
    this.state = {
      mainpanel: this.props.store.mainpanel.all,
      element: this.props.store.element.all,        
      show: this.props.store.mainpanel.show
    }   
  }
  
  _handleClickPanel = (name) => {
    clickPanel(name)
    dragElement()
    sortTable(this.state.element)
  }
  
  get getInitialState() {
    dragElement()
    sortTable(this.state.element)
  }

  get listMainPanel() {
    const thisPanel = this.state.mainpanel.map((item, index) =>
        <div className="nav-item" key={index} data-name={item.name} onClick={this._handleClickPanel.bind(this, item.name)}>
            <i className={ item.icon }></i>
        </div>
    );    
    return thisPanel
  }

  render() {
      return (
        <div className="columns">
          <div className="column side-nav">
            {this.listMainPanel}
          </div>
          <div className="column side-content">            
              <ElementContent />           
              <LayoutContent />
          </div>
        </div>
    );
  }
}

export default Panel;
