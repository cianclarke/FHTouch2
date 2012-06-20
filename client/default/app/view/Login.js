/**
 * Login View
 * 
 */
Ext.define("fh.view.Login", {
    extend: "Ext.form.Panel",
    xtype: "loginScreen",
    requires: [
    "Ext.form.FieldSet",
    "Ext.field.Text",
    "Ext.field.Password"
    ],
    config: {
        layout: "vbox",
        items: [
        {
            xtype: "fieldset",
            id: "login",
            title: "Login",
            items: [
            {
                xtype: "textfield",
                name: "username",
                placeHolder: "Username",
                required: true
            },
            {
                xtype: "passwordfield",
                name: "password",
                placeHolder: "Password",
                required: true
            }
            ]
        },
        {
            xtype: "button",
            itemId: "loginButton",
            text: "Login",
            ui: "confirm"
        },
        {
            xtype: "spacer"
        }
        ]        
    }
});