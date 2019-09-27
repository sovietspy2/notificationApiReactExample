import React from 'react';
import logo from './logo.svg';
import './App.css';
import Notify from "notifyjs";

class App extends React.Component{

  constructor(props) {
    super(props);

    if (!Notify.needsPermission) {
      this.doNotification();
    } else if (Notify.isSupported()) {
      Notify.requestPermission(()=>this.onPermissionGranted(), ()=>this.onPermissionDenied());
    }

  }

  doNotification() {
    var myNotification = new Notify("Important message from administrators:", {
      body: "Hello there you are banned! 🤣",
      notifyShow: () => console.log("notification was shown!")
    });

    myNotification.show();
  }

  onPermissionGranted() {
	  console.log('Permission has been granted by the user');
	  this.doNotification();
  }

  onPermissionDenied() {
    console.warn('Permission has been denied by the user');
  }


  render() {
    return (
      <div className="App">
          <p>Hello. u want sum fuk?</p>
    
        <div>
          <button onClick={() => this.doNotification()}>
            SEND ME A NOTIFICATION
          </button>
        </div>
      </div>
    );
    }
  }



export default App;
