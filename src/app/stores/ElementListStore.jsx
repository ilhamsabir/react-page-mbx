import { autorun, observable } from "mobx";

const elementAction = () => {
	const action = `<div class="builder-selected-element hidden">
                    <div class="box-action-element">
                    <div class="box-action-element__item" data-action="edit">
                    <i class="fa fa-pencil"></i>
                    </div>
                    <div class="box-action-element__item" data-action="delete">
                    <i class="fa fa-trash"></i>
                    </div>
                    <div class="box-action-element__item handle" data-action="move" >
                    <i class="fa fa-arrows"></i>
                    </div>
                    </div>
                    </div>`;
	return action
}

class ElementListStore {
    all = observable([ 
        {   
            id: 1, 
            name: "heading", 
            icon: "lp-icon managix-icon-heading",
            html: `<div class="element clearfix" data-element="text-editable">
                    ${elementAction()}
                    <div class="editable">
                    <h2 class="editable">Heading</h2>
                    </div>
                    </div>`,
        },
        {
            id: 2, 
            name: "paragpraph", 
            icon: "lp-icon managix-icon-paragraph",
			initial: 'el-paragraph',			
			html: `<div class="column element clearfix" data-element="text-editable">
                    ${elementAction()}
                    <div class="editable">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum</p>
                    </div>
                    </div>`,
        },
        {id: 3, name: "image", icon: "lp-icon managix-icon-basics"},
        {id: 4, name: "button", icon: "lp-icon managix-icon-link"}
    ])
};

export default ElementListStore;