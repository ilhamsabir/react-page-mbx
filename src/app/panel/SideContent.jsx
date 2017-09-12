import React from "react";
import { observer } from "mobx-react";

import ElementContent from "./content/ElementContent.jsx";
import LayoutContent from "./content/LayoutContent.jsx";

@observer
class SideContent extends React.Component {
    constructor(props) {
        super(props);
       console.log('------------------------------------');
       console.log('props from sidenav', props);
       console.log('------------------------------------');
    }
    render() {      
        return (
            <div className="">
                <ElementContent />
                <LayoutContent />
            </div>
        );
    }
}

export default SideContent;
