'use strict'

import { contentWrapper } from './Selector.jsx'
import 'webpack-jquery-ui/draggable'
import 'webpack-jquery-ui/droppable'
import 'webpack-jquery-ui/resizable'
import 'webpack-jquery-ui/selectable'
import 'webpack-jquery-ui/sortable'

export const clickPanel =  (name) => { 
    let initContent = contentWrapper()
    let initContentByName = $('.content-wrapper[data-name="'+name+'"]')
    let navItem = $('.nav-item')
    let navItemByName = $('.nav-item[data-name="'+name+'"')
    $(initContent).removeClass('active')
    $(initContentByName).addClass('active')

    $(navItem).removeClass('active')
    $(navItemByName).addClass('active')
};

export const dragElement = (name) => {
    $('.element-item').draggable({
        cursor: 'move',
        refreshPositions: true,
        helper: 'clone',
        revert: "invalid",
        connectToSortable: ".col-sortable",
    });
};

export const sortTable = (element) => {
    $( ".col-sortable" ).sortable({
        connectWith: '.col-sortable',
        revert: true,
        placeholder: "drop-placeholder",
        appendTo: '.col-sortable',
        revert: true,
        handle: '.handle',
        scroll: false,
        sort: function (e, ui) {
            $(this).removeClass("ui-state-default")
        },
        start: function (e, ui) {
            ui.item.show()
        },
        stop: function (event, ui) {
            element.forEach(elem => {
                let identifier = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
                console.log('ui', ui.item.get(0).dataset)
                if (ui.item.get(0).dataset.name == elem.name) {
                    console.log('same')
                    ui.item.get(0).remove()
                    var setAttrIdElem = $(elem.html).attr('id', identifier)
                    setAttrIdElem.clone(true).appendTo(this)
                    $(elem.html).removeClass('ui-state-default')                 
                }
            })
        },
    })
};