require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class NavComponent extends  React.Component {
    render(){
        return (
            this.props.Nav.map(function (item) {
                <li><a href={item.url}>{item.text}</a></li>
            })
        );
    }
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="head">
            <a href="/" class="logo"><img src={this.props.logo.url} alt="log"/></a>
            <ul>
                <NavComponent Nav={this.props.Nav}/>
            </ul>
        </div>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
    logo:{
        url:'http://upload.youbika666.com/Web/images/default/logo.png'
    },
    Nav: [{
        url:'/',
        text:'首页'
    },{
        url:'/a',
        text:'文展'
    },{
        url:'/t',
        text:'图展'
    },{
        url:'/j',
        text:'技展'
    }]
}
NavComponent.defaultProps = {

};

export default AppComponent;
