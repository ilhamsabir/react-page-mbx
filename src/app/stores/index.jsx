import MainpanelStore from "./MainPanelStore.jsx";
import ElementListStore from "./ElementListStore.jsx";

class AllStore {
	constructor() {
		this.mainpanel = new MainpanelStore(this)
		this.element = new ElementListStore(this)
		// this.ad = new AdStore(this)
	}
}

const allStore = new AllStore()

window.store = allStore

export default allStore