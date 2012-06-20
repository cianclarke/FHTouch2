Ext.Loader.setPath({
  'Ext': 'sdk/src',
  'Ux' : 'ux'
});

Ext.application({
    name: 'fh',
    //controllers: ['LoginController', 'ContactController'],

    requires: [
    'Ext.MessageBox'
    ],

    views: ['Login', 'Tabs'],
    //models :['ContactModel'],
	  //stores :['ContactStore'],
    launch: function() {
        // Initialize the main view
        Ext.Viewport.add({xtype: 'loginScreen'});
    }
});
