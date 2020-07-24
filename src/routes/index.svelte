<script>
	import SelfPortrait from '../components/SelfPortrait.svelte'
	import AllisonTattoo from '../components/AllisonTattoo.svelte'
</script>

<svelte:head>
	<title>Jess Tucker - Full Stack Web Developer</title>
</svelte:head>

<div id="bodycenter">
        <div id="outer-wrapper">
          <div id="inner-wrapper">
            <div id="heading">
            <div class="header-left-margin">
              <SelfPortrait />
            </div>
            <div class="header-center">
            </div>
            <div class="header-right-margin">

                  <div id="signature">
                      <div>Jess Tucker</div>
						<div>The Miles Davis of Solitaire </div>
						<div>The Kurt Cobain of Web Development</div>
                      <div>Web Developer</div>
                      <!-- <div>{createDate()}</div> -->
                  </div>

            </div>
              
            </div>
            <div id="body">
              <div id="body-content-wrapper">
                <div id="paper">
                <div class="body-left-margin">
                  
                    <div>
                      
                    
                      <div class="diagonal-text line-spaced">
                        <!-- <Link to="/resume">cv</Link> -->
                      </div>
                      <div class="diagonal-text line-spaced">
                        art
                      </div>
                      <div class="diagonal-text line-spaced">
                        <a href="https://github.com/jesstucker">code</a>
                      </div>
                      <div class="diagonal-text line-spaced">
                        <a href="https://soundcloud.com/jeff-ff">techno</a>
                      </div>
                      </div>
                  
                </div>
                  <div class="stuff body">
                    <div class="allison-tattoo-container">
                      <AllisonTattoo class={'svg-mirror'}/>
                      <AllisonTattoo />   
                      <AllisonTattoo class={'svg-mirror'}/>   
                      <AllisonTattoo />  
                      <AllisonTattoo class={'svg-mirror'}/>   
                      <AllisonTattoo />  
                      <AllisonTattoo class={'svg-mirror'}/>   
                      <AllisonTattoo />   
                    </div>
                    <div class="allison-tattoo-container">
                      <AllisonTattoo />
                      <AllisonTattoo class={'svg-mirror'}/>
                      <AllisonTattoo />   
                      <AllisonTattoo class={'svg-mirror'}/>   
                      <AllisonTattoo />  
                      <AllisonTattoo class={'svg-mirror'}/>   
                      <AllisonTattoo />  
                      <AllisonTattoo class={'svg-mirror'}/>      
                    </div>
                    <div class="allison-tattoo-container">
                      <AllisonTattoo class={'svg-mirror'}/>
                      <AllisonTattoo />   
                      <AllisonTattoo class={'svg-mirror'}/>   
                      <AllisonTattoo />  
                      <AllisonTattoo class={'svg-mirror'}/>   
                      <AllisonTattoo />  
                      <AllisonTattoo class={'svg-mirror'}/>  
                      <AllisonTattoo />    
                    </div>
                    <div class="allison-tattoo-container">
                      <AllisonTattoo />
                      <AllisonTattoo class={'svg-mirror'}/>
                      <AllisonTattoo />   
                      <AllisonTattoo class={'svg-mirror'}/>   
                      <AllisonTattoo />  
                      <AllisonTattoo class={'svg-mirror'}/>   
                      <AllisonTattoo />  
                      <AllisonTattoo class={'svg-mirror'}/>      
                    </div>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<style>
	@font-face {
	font-family: 'ComputerModern';
	src: url('./fonts/ComputerModern/Serif/cmunrm.ttf');
}
body{
	font-family: 'ComputerModern';
}

#bodycenter {
	margin: 0 auto;
	padding: 10%;
}
@media (max-width: 850px) {
	#bodycenter {
		padding: 3%;
	} 
}

@media (max-width: 640px) {
	#bodycenter {
		padding: 1%;
	} 
}

#inner-wrapper{
	border-radius: 3px;
	border: 1px dotted #eaeaea;
}
#heading {
	display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "header-left-margin header-center header-right-margin";
	width: 100%;
	background-color: #F4F0EE59;
	background-image: 
		linear-gradient(90deg, transparent 16.5%, rgba(253, 65, 55, 0.281) 16.85%, rgba(253, 65, 55, 0.192) 16.5%, transparent 16.85%),
		linear-gradient(90deg, transparent 82.65%, #FD42371A 83.1%, #FD42371A 82.65%, transparent 83.1%);
		/*linear-gradient(#58D7E540 .2em, transparent .2em);*/
		background-size: 100% 1.7em;
}

.header-right-margin {
	grid-area: header-right-margin;
	align-self: center;
	justify-self: center;
}

.header-left-margin {
	grid-area: header-left-margin;
	justify-self: center;
	display: flex;
	align-items: flex-end;
	padding: 20%;

}

.header-center {
	grid-area: header-center;
	justify-self: center;
	display: flex;
	align-items: flex-end;
}

#body {
	background-color: #F4F0EE59; 
	background-image: 
		linear-gradient(90deg, transparent 16.5%, rgba(253, 65, 55, 0.281) 16.85%, rgba(253, 65, 55, 0.192) 16.5%, transparent 16.85%),
		linear-gradient(90deg, transparent 82.65%, #FD42371A 83.1%, #FD42371A 82.65%, transparent 83.1%),
		linear-gradient(rgba(88, 215, 229, 0.103) .15em, transparent .15em);
		background-size: 100% 3%;

}

#paper{
	display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "body-left-margin body body-right-margin"
    "footer-left-margin footer-center footer-right-margin";
}

.body-left-margin{
	grid-area: body-left-margin;
	margin-top: 1.5vw;
}
.enumerated {
	line-height: 1.437em;
	margin: 0.03em 0.3em 0.03em 0;
	text-align: right;
}

.line-spaced {
	font-size: 1.38vw;
}
.diagonal-text {
	transform: rotate(315deg);
	transform-origin: 75% 75%;
	line-height: 0.75em;
	margin: 1em 0;
	text-align: right;
}
.body-right-margin{
	grid-area: body-right-margin;
	background-color: pink;
}
.body{
	grid-area: body;
	padding: 3.2% 0 5% 0;
}

#signature {
	font-size: 0.5em;
	text-align: center;
	color: grey;
}


#selfportrait {
  	/*width:100%;*/
  	text-align: middle;
}
#selfportrait-object {
  	width:100%;
}


#lunch {
	display:block;
/*	float:right;
	width: 37%;*/
	clear: both;
}

 #lunch > a {
 	box-shadow: none;
 }


#rightside {
	float: right;
	width:60%;
}

ul {
	margin:0; 
	padding:0; 
	list-style:none; 
}

table {
	border-width: 1px;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0.3);
}
th {
	cursor:pointer;
	text-align: left;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

td {
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);	
}
tr > *:nth-child(3) {
    display: none;
}









a, a:link, a:visited {
	color:black;
	text-decoration: none;
/*	border-bottom: 3px solid #b4e7f8;*/
	box-shadow: inset 0 -4px 0 #b4e7f8;
	white-space: pre-line;
 
}

#skills {
	width: 100%;
	display: inline-table;
}
#skills tr {
	line-height: 15%;
}


/* .stuff{
	line-height: 1.7em;
} */

.index-card-container{
	position: relative;
	width: 100%;
}

.index-card-container:before{
	content: "";
	display: block;
	padding-top: 60%; 	/* initial ratio of 1:1*/
}

.index-card { 
	border: 1px dotted lightgrey;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	overflow: hidden;
}
.index-card-content{
	position: relative;
	height: 100%;
	font-size: 100%;
}
.index-card-header{
	/*position: relative;*/
	background-color: #FBFAF9F0;
	background-image: 
		linear-gradient(0deg, transparent 64%, #FCA9A4F0 67%, #FCA9A4F0 67%, transparent 64%);
		background-size: 100% 200%;
	height:25%;
	font-size: 1vw
}
.index-card-body{
	/*position: relative;*/
	background-color: #FBFAF9F0;
	background-image: 
		linear-gradient(#58D7E5F0 2%, transparent 15%);
		background-size: 100% 11.5%;
	height:75%;
	font-size: .5vw;
	line-height: .70em;
}
.tiny-table{
	display: inline-block;
	/*width: 25%;*/
	min-height: 33%;
	min-width: 25%;
	max-width: 30%;
	border: 1px dotted lightgrey;
	/*height: 43%;*/
	overflow: hidden;
	vertical-align: top;
}

.resume_container{
	display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
.resume_item {
	grid-column-start: 10px;
  grid-column-end: 10px;
  grid-row-start: 10px;
  grid-row-end: 10px;
}
.allison-tattoo-container{
	line-height: 0;
	display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}


.svg-mirror {
	transform: scale(-1,1);
}


.lady-hand {
	animation: shuffle .5s linear infinite;	
}
</style>