/*
 * Copyright 2015 Anton Tananaev (anton@traccar.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.view.State', {
    extend: 'Ext.grid.Panel',
    xtype: 'stateView',

    requires: [
        'Traccar.view.StateController'
    ],

    controller: 'state',
    store: 'Attributes',

    stateful: true,
    stateId: 'state-grid',

    tbar: {
        componentCls: 'toolbar-header-style',
        items: [{
            xtype: 'tbtext',
            html: Strings.stateTitle,
            baseCls: 'x-panel-header-title-default'
        }, {
            xtype: 'tbfill'
        }, {
            xtype: 'button',
            disabled: true,
            handler: 'onAliasEditClick',
            reference: 'aliasEditButton',
            glyph: 'xf02b@FontAwesome',
            tooltip: Strings.sharedEdit,
            tooltipType: 'title'
        }]
    },

    listeners: {
        selectionchange: 'onSelectionChange'
    },

    columns: {
        defaults: {
            minWidth: Traccar.Style.columnWidthNormal,
            flex: 1
        },
        items: [{
            text: Strings.stateName,
            dataIndex: 'name'
        }, {
            text: Strings.stateValue,
            dataIndex: 'value',
            renderer: function (value, metaData, record) {
                if (record.get('attribute') === 'alarm') {
                    metaData.tdCls = 'view-color-red';
                }
                return value;
            }
        }]
    }
});
