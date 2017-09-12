import { autorun, observable } from "mobx";

class MainPanelStore {
    show = observable('active')
    
    all = observable([ 
        {id: 1, name: "element", icon: "lp-icon managix-icon-interest-1"},
        {id: 2, name: "layout", icon: "lp-icon managix-icon-product"},
        {id: 3, name: "tracking", icon: "lp-icon managix-icon-performance"},
        {id: 4, name: "setting", icon: "lp-icon managix-icon-optimization"}
    ])
};
// const panel = new MainPanel;

// window.store = panel;

export default MainPanelStore;