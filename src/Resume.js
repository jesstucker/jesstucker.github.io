import React, { useState, useEffect } from 'react';

const fetchGithub = async () => {
  let response = await fetch('https://api.github.com/users/jesstucker/repos')
  let githubData = await response.json()
  console.log(githubData)
  return githubData
}
const Resume = (props) => {
  const [data, setData] = useState({ hits: [] });
  
  useEffect (() => {
    (async () => {
      const res = await fetchGithub()
      setData({ hits: res})
    })()
  }, []);

  return(
      <div className="">
            {/* {console.log(data.hits)}
              {

                  data.hits.map((dat, i )=>
                  <div className="resume_item" key={i}>{dat.name}</div>)

              } */}
          <h2>SKILLS SUMMARY</h2>
          <p>
          Full stack web developer. Have more than 3 years of experience designing and implementing web applications in Python, PHP, JavaScript, and React.
          </p>
          <ul>
            <li>Have knowledge of software engineering principles.</li>
            <li>Have knowledge and implementation experience of design patterns.</li>
            <li>Have experience of integrating applications using RESTful Web Services.</li>
            <li>Have done test driven development (TDD) using Selenium for functional testing and Python for unit testing.</li>
            <li>Have used Fabric and Travis for CI/CD.</li>
            <li>Have understanding of agile practices.</li>
            <li>Have database design skills. </li>
          </ul>


          <h2>TECHNICAL SUMMARY</h2>
          <p>
          Programming Languages: Python 2+/3+, PHP 5/7, JavaScript / Node.js
          Frameworks/Libraries/Services: Django, Flask, Drupal, React.js, REST, AWS
          Servers/Related: Nginx, Apache, Gunicorn, AWS Lambda, Elastic Beanstalk (EC2)
          ORM: Django/SQLAlchemy
          RDBMS: PostgreSQL, SQLite3
          Additional experience: QUnit, JSON, XML, MySQL, AJAX
          </p>


          <h2>EXPERIENCE</h2>

          <h3>Movement Mortgage (06/18 - Present)</h3>
          <ul>
            <li>Architecting and developing data REST APIs</li>
            <li>Maintaining and debugging legacy codebases </li>
            <li>Developing CI/CD pipelines / DevOps </li>
            <li>Developing lead capture marketing sites desktop /mobile, backend / frontend </li>
            <li>Managing projects using agile / scrum </li>
            <li>Technologies: Python, Django, Django Rest Framework, Node.js, JavaScript ES5, ES6, Vue.js, React.js, Gatsby.js, REST, YAML, GraphQL, AWS Lambda, AWS Elastic Beanstalk, AWS API Gateway, AWS Alexa Skills, PHP, Laravel, WordPress, Travis, Google Analytics (GA), Fullstory Analytics, Jira, VS Code, NPM, SASS, WebPack, Bitbucket</li>
          </ul>


          <h3>Bit Autonomy (03/18 - 06/18)</h3>
          <ul>
            <li>Developing web platforms for expanding customer contact strategy</li>
            <li>Developing data pipelines to feed business with relevant industry information via industry APIs </li>
            <li>Implementing analytics and advertising efforts</li>
            <li>Technologies: Python, JavaScript, Bootstrap, Google Analytics/AdWords, Ansible</li>
          </ul>


          <h3>Everybody’s Bike Rental (01/18 - 03/18)</h3>
          <ul>
            <li>Developing full-scale web applications for bike rental reservation system.</li>
            <li>Django backend reservation system which detects reservation conflicts for bike inventory rental. </li>
            <li>Built and managed using Agile practices with changing client specifications to suit their business domain and workflow idiom.  Working closely with client to improve design over several iterations.</li>
            <li>Deployed and maintained on cost effective web service provider.</li>
            <li>Front end customer interface prototype development using React.js</li>
            <li>Legacy website performance optimizations.</li>
            <li>Technologies: Python/Django, JavaScript, JQuery, React.js</li>
          </ul>

          <h3>Art Institute of Chicago (05/11–08/14)</h3>
          <ul>
            <li>Developing software for new applications by performing extract, transform, load (ETL) on legacy Java inventory platform. Heavy use of regular expressions (RegEx) required for data parsing/transforming.  Local application tools refactored into web application tools. Developing Microsoft Excel and Google Sheets macros.</li>
            <li>Developing statistical methods and applications for inventory growth management within the library domain.</li>
            <li>Technologies: Python, PHP, Java, Regular Expressions (RegEx), Visual Basic, Microsoft Excel, Google Sheets, JavaScript.</li>
          </ul>

          <h3>Client, Campbell Ford (07/11–12/11) </h3>
          <ul>
            <li>Develop CMS for Car Dealership</li>
            <li>Developing Custom PHP Templates</li>
            <li>Configuring Apache servers</li>
            <li>Technologies: PHP, Drupal, JavaScript, CSS</li>
            </ul>

            <h3>Wm. Wrigley Jr. Company (12/08–05/11)</h3>
            <ul>
            <li>Performing computer-operated laboratory testing for data-driven quality assurance in package prototyping.</li>
            <li>Performing extract, transform, load (ETL) on packaging data in SAP for global sustainability initiative specifications.</li>
            <li>Technologies: Microsoft Excel, Visual Basic, SAP</li>
          </ul>

          <h3>EDUCATION</h3>
          <div>Bachelor of Fine Art (BFA)</div>
          <div>University of Central Florida, Orlando, FL</div>
      </div>
  )
}

export default Resume