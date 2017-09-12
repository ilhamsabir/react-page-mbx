import React from "react";
import { observer } from "mobx-react";


class LayoutContent extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
           layout: [{ id:1, name: "section1"}]
       }
    }

    _handleClickAddLayout = () => {
        var joined = this.state.layout.concat({ id: 2, name: "section2"})
        this.setState({ layout: joined })
    }

    render() {
        const listLayout = this.state.layout.map((item, index) =>
            <div className="layout-column" key={index} data-index={index}>
                <strong>{ item.name }</strong>
            </div>
        );
        return (
            <div className="content-wrapper" data-name="layout">
                <div class="layout-wrapper">
                    {listLayout}
                </div>
                <div class="layout-action" onClick={this._handleClickAddLayout}>Add Section</div>
            </div>
        );
    }
}

export default LayoutContent;
