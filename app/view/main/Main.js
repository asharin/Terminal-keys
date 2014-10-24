/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.create('E1.store.Keys');
Ext.create('E1.store.Stuffs');
Ext.create('E1.store.Katamarans');

Ext.define('E1.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        title: 'Подсистема учета ключей',
        height:'100%',

        xtype: 'tabpanel',
        bodyPadding:'15',
        items:[{
            extend: 'Ext.container.Container',
            title: 'Ключи',
            layout: {
                type: 'table',
                columns:'2',
                tdAttrs: { style: 'padding: 10px; vertical-align: top;' }},
            items:[
            {   title:'Таблица ключей',
                height:'400',
                width:'700',
                xtype: 'grid',
                layout:'fit',
                store: Ext.data.StoreManager.lookup('keystore'),
                columns: [{text:'Id',dataIndex:'id', width: 30},{text:'Name',dataIndex:'name'},{text: 'Hole',dataIndex:'hole'},
                 {
                 xtype: 'actioncolumn',
                 width: 30,
                 sortable: false,
                 menuDisabled: true,
                items: [{
                    icon: 'resources/delete.gif',
                    tooltip: 'Delete Plant',
                    scope: this,
                    handler: this.onRemoveClick
                }]  }]
            },{items:[{html: '<h2>Таблица ключей и таблица операций</h2>'},{   
                height:'40%',
                width:'500',
                xtype: 'grid',
                layout:'fit',
                store: Ext.data.StoreManager.lookup('keystore'),
                columns: [{text:'Id',dataIndex:'id'},{text:'Name',dataIndex:'name'},{text: 'Hole',dataIndex:'hole'}]
            }]}
            ]
        },{title: 'Техники',
            items:[
            {html: '<h2>Таблица техников</h2>'},
            {   height:'500',
                widht:'500',
                xtype: 'grid',
                layout:'fit',
                store: Ext.data.StoreManager.lookup('stuffstore'),
                columns: [{text:'Id',dataIndex:'id'},{text:'Name',dataIndex:'name'},{text: 'Role',dataIndex:'role'}]
            }
            ]
        },{
            title: 'Катамараны',
            items:[
            {html: '<h2>Таблица терминалов</h2>'},
            {   height:'500',
                widht:'500',
                xtype: 'grid',
                layout:'fit',
                store: Ext.data.StoreManager.lookup('katamaranstore'),
                columns: [{text:'Id',dataIndex:'id'},{text:'Code',dataIndex:'code'},{text: 'Adress',dataIndex:'adress'}]
            }
            ]
        }]
    }]
});
