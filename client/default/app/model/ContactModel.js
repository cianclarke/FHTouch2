Ext.define('fh.model.AccountModel',{
  extend:'Ext.data.Model',
  requires:['Ext.ux.FHActProxy'],

  config:{
    fields:[
      {
        name:'name',
        type:'string'
      },

      {
        name:'phone',
        type:'string'
      }
    ],
    /*proxy : {
      type: 'fhactproxy',
      reader: 'json',
      act: 'getContacts',
      req: 'authData' // $fh.data key to use with the request
    }*/
  }
});