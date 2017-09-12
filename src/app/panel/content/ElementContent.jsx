import React from "react";
import { observer, inject } from "mobx-react";


@inject('store') @observer
class ElementContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: this.props.store.element.all,
        }
    }
    render() {
        const listElement = this.state.element.map((item, index) =>
            <div className="element-item" key={index} data-name={item.name}>
                <i className={ item.icon }></i>
                <strong>{ item.name }</strong>
            </div>
        );
        return (
            <div className="content-wrapper active" data-name="element">
                { listElement }
            </div>
        );
    }
}

export default ElementContent;
