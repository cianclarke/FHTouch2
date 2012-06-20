Ext.define("fh.view.Tabs", {
    extend: "Ext.tab.Panel",
    xtype: "TabPanel",
    id: 'tabpanel',
    requires: [],
    config: {
      items: [
        {
          dock: 'top',
          title: 'TabPanel Button A',
          html: 'test'
        }
      ]

    }
    
});


