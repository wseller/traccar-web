/*
 * Copyright 2016 - 2017 Anton Tananaev (anton@traccar.org)
 * Copyright 2016 - 2017 Andrey Kunitsyn (andrey@traccar.org)
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

Ext.define('Traccar.view.dialog.ReportConfigController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.reportConfig',

    requires: [
        'Traccar.store.ReportEventTypes',
        'Traccar.store.AllNotifications'
    ],

    onSaveClick: function (button) {
        var eventType;
        this.getView().callingPanel.deviceId = this.lookupReference('deviceField').getValue();
        this.getView().callingPanel.groupId = this.lookupReference('groupField').getValue();
        eventType = this.lookupReference('eventTypeField').getValue();
        if (eventType.indexOf(Traccar.store.ReportEventTypes.allEvents) > -1) {
            eventType = [Traccar.store.ReportEventTypes.allEvents];
        } else if (eventType.length === this.lookupReference('eventTypeField').getStore().getCount() - 1) {
            eventType = [Traccar.store.ReportEventTypes.allEvents];
        }
        this.getView().callingPanel.eventType = eventType;
        this.getView().callingPanel.chartType = this.lookupReference('chartTypeField').getValue();
        this.getView().callingPanel.showMarkers = this.lookupReference('showMarkersField').getValue();
        this.getView().callingPanel.fromDate = this.lookupReference('fromDateField').getValue();
        this.getView().callingPanel.fromTime = this.lookupReference('fromTimeField').getValue();
        this.getView().callingPanel.toDate = this.lookupReference('toDateField').getValue();
        this.getView().callingPanel.toTime = this.lookupReference('toTimeField').getValue();
        this.getView().callingPanel.updateButtons();
        button.up('window').close();
    }
});
