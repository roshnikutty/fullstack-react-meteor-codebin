import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
    componentDidMount() {
        //Add in Accounts UI from Blaze
        //render login from Blaze's template into a 
        //dom node in the render below using ref and save to the view: https://docs.meteor.com/packages/accounts-ui.html
        //To add Accounts and a set of login controls to an application, add the accounts-ui package
        this.view = Blaze.render(Template.loginButtons, 
            ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        //clear up DOM after third party (Blaze from Meteor) use in React
        Blaze.remove(this.view);
    }

    render() {
        return (<div ref='container'>
            </div>);
    }
}

export default Accounts;