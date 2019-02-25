import React, { Component} from 'react';
import SelfPortrait from './images/SelfPortait'
import AllisonTattoo from './images/AllisonTattoo'
import {createDate} from './util'

import { Route, NavLink, Link, BrowserRouter as Router } from 'react-router-dom'


const Paper = (props) => {return(
  <div id="bodycenter">
  <div id="outer-wrapper">
    <div id="inner-wrapper">
      <div id="heading">
      <div className="header-left-margin">
        <SelfPortrait />
      </div>
      <div className="header-center">
        
      </div>
      <div className="header-right-margin">

            <div id="signature">
                <div>Jess Tucker</div>
                <div>Web Developer</div>
                <div>{createDate()}</div>
            </div>

      </div>
        
      </div>
      <div id="body">
        <div id="body-content-wrapper">
          <div id="paper">
          <div className="body-left-margin">
            
              <div>
                
              
                <div className="diagonal-text line-spaced">
                  <Link to="/resume">cv</Link>
                </div>
                <div className="diagonal-text line-spaced">
                  art
                </div>
                <div className="diagonal-text line-spaced">
                  <a href="https://github.com/jesstucker">code</a>
                </div>
                <div className="diagonal-text line-spaced">
                  <a href="https://soundcloud.com/jeff-ff">techno</a>
                </div>
                </div>
            
            {/* {range(33).map(num => <div className={'enumerated'}>{num}.</div>)} */}
          </div>
            <div className="stuff body">
              
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
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
)}

export default Paper