import React from "react";
import { clickPanel, dragElement, sortTable } from "./../../helper/Global.jsx"

const handleClick = (name) => {
    // sortTable()
    // dragElement()
    clickPanel(name)
}

const ListPanel = ({name, icon}) => {
    return (
        <div className="nav-item" data-name={name} onClick={handleClick.bind(this,name)}>
            <i className={ icon }></i>
        </div>
    );
}

export default ListPanel;
