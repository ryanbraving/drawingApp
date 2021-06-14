# Drawing App
This is an interactive drawing app developed completely on MeteorJS.
App has been deployed on Heroku and is accessible in here:
https://ryanbraving-drawingapp.herokuapp.com/

People can draw together at the same time on their own browsers, no matter where they are! To check it out you can open the above link in two different browsers (e.g Firefox and Chrome) at the same time and start drawing.

MongoDB is the database and for drawing features D3 JavaScript library has been used. 
On the deployed version, the MangoDB Atlas is used which is hosted on AWS free tier. So intercativity might be a little slow sometimes. 


## Installed packages during developments:

`meteor add session` <br/>
`meteor add twbs:bootstrap@=3.3.2` <br/>
or <br/>
`meteor add twbs:bootstrap@=3.3.2 --allow-incompatible-update` <br/>


## Getting this repo and running local server
#### Clone

`git clone git@github.com:ryanbraving/drawingApp.git` <br/>



#### Install dependancies
`cd drawingApp` <br/>
`meteor npm install` <br/>

#### Run server
`meteor` <br/>

Open your browser and hit `localserver:3000`
