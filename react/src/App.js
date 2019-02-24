import React, { Component, Suspense } from 'react';
import './App.css';
import SelfPortrait from './images/SelfPortait'
import AllisonTattoo from './images/AllisonTattoo'
import Resume from './Resume'
import {createDate} from './util'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="bodycenter">
  <div id="outer-wrapper">
    <div id="inner-wrapper">
      <div id="heading">
        <div id="sig-wrap">
          <div id="signature">
            <div id="name">
              Jess Tucker<br />
              Web Developer<br />
            </div>
            <div id="clock">{createDate()}</div><br />


          </div>
        </div>
      </div>
      <div id="body">
        <div id="body-content-wrapper">
          <div id="body-content">
            <div className="pusher"></div>
            <div className="stuff">
              {/* <div id="selfportrait">
                <SelfPortrait />  
              </div> */}

              <div className="allison-tattoo-container">
                <AllisonTattoo />
                <AllisonTattoo className={'svg-mirror'}/>
                <AllisonTattoo />   
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>
              </div>
              <div className="allison-tattoo-container">
                <AllisonTattoo className={'svg-mirror'}/>
                <AllisonTattoo />   
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />   
              </div>
              <div className="allison-tattoo-container">
                <AllisonTattoo />
                <AllisonTattoo className={'svg-mirror'}/>
                <AllisonTattoo />   
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>      
              </div>
              <div className="allison-tattoo-container">
                <AllisonTattoo className={'svg-mirror'}/>
                <AllisonTattoo />   
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>  
                <AllisonTattoo />    
              </div>
              <div className="allison-tattoo-container">
                {}
                <AllisonTattoo />
                <AllisonTattoo className={'svg-mirror'}/>
                <AllisonTattoo />   
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>   
                <AllisonTattoo />  
                <AllisonTattoo className={'svg-mirror'}/>      
              </div>
              {/* <Suspense fallback={<div>Loading...</div>}>
                <Resume />
              </Suspense> */}
             </div>
             <div className="pusher"></div>
             <div className="pusher"></div>
             <div className="pusher"></div>
             <div className="pusher"></div>
             <div className="pusher"></div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
    );
  }
}

export default App;