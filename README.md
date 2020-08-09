# Recal

## Video

## About

This app was made for the Auth0 Hackaton, the team involved in the all recal project was [Swapnil Madhavi](https://www.linkedin.com/in/swapnil-madhavi/), [Shammah Matasva](https://www.linkedin.com/in/shammah-matasva/), [Daniel Santos](https://www.linkedin.com/in/daniel-santos-102aa8190/) and [Sandesh Chinchole](https://www.linkedin.com/in/sandeshchinchole/).

The category we choose on the hackaton was the one that allowed us to solve the impacts of covid in the world. 

Even though Covid helped the enviroment when emissions have fallen sharply due to the lockdown, and people bieng able to work remotely,
there was another problem that started to manifest itself, the beaches and florests started to get cluttered with masks, alcool bottles,
and plastic gloves.

Our idea was simple, have an app where you can have rewards for returning the used masks, gloves, and alcool bottles to the right places.

In the U.S, colleges and companies have been giving these items to students and employers respectively.

The application ensures there is no person to person contact by making use of a qrcode scanning feature which also add to the speed and efficiency of using the application, since the client has to perform only one action of opening the scanner.

## How it works

This app is made out of two different parts, one tablet app for the admin part ( the college or the company ) and one mobile app for the
studens or workers at the company.

When the student or worker at the company wants to deliver or collect masks, gloves, alcool bottles, he goes to the disposing office in the company or university.
There he will find another person who is using the admin app, and has the responsibility to give or recieve items.

To do this transaction between the user and the company or university, the user gives the items, and then points to the QR code that is in the tablet admin app.

If the transaction is authorized, the user then recieves points, which can be exchanged for starbucks coffees, dominos pizzas, and more.

These rewards are choosen by the company or university, and can be dynamically updated. For example, if the user is in level 2, and has 1200 points, he might be able to get a free starbucks coffee. This starbucks coffee was decided by the company or university for that specific level or number of points. This allows the Human resourses department at the company or uni to be creative and create a connection with the workers or students.

The items returned or collected, can also be dynamically updated by the company or uni. This allows for flexibility, having a bigger scope of use, and most importantly ...

##### Going beyond covid-19 ...

This project isn´t just useful in covid-19 times, the university or company can keep using it after that, due the adaptability the app offers. Forget boring tasks like updating your develpment hours, or having a list of office items to return at a certain date. Now everything is easy to keep track.. and students or workers get rewarded for doing that. Imagine the workers at a company recieving a free beer on the last friday of the month, if they have all of the develpment hours updated and ready for the financials team. You would never again have to remember people to update their hours.

We can really see the Human resourses department at a company having fun with this one :)

Helping the enviroment, the company, your university, recal is there for you.



Example of the tablet app for the uni of Chicago:
![alt text](https://github.com/danijorgesantos/gatsby-auth0-redux/blob/master/readme.PNG?raw=true)


![alt text](https://github.com/shammahm24/auth0-project-recal-app/blob/master/readme2.PNG?raw=true)


## Tech stack used
<ul>
  <li>MongoDB ( AWS server )</li>
  <li>Express.js</li>
  <li>React.js</li>
  <li>Node.js</li>
  <li>Socket.io</li>
  <li>Auth0</li>
  <li>Gatsby</li>
  <li>Ionic</li>
  <li>Vercel (Admin hosting)</li>
  <li>Heroku (Backend hosting)</li>
  
</ul>

## App Demo Links
### Mobile Client
#### Android
https://drive.google.com/file/d/1Gc34QyJ-P1T1Yqtlt305WKwC6E-yZ63S/view?usp=sharing

### Web Client (Admin App) 
#### This is a tablet app, use in 1024 x 756 
https://gatsby-auth0-redux.vercel.app/account



## How to use it

### For the Android

#### To get started you can:

```bash
cd /mobile-client/
```

```bash
npm install
```

```bash
ionic cordova prepare android
```

```bash
ionic cordova run android
```


### For the admin tablet app

#### To get started you can:

```bash
git clone https://github.com/shammahm24/auth0-project-recal-app
```

```bash
gatsby new auth0-gatsby https://github.com/shammahm24/auth0-project-recal-app/admin
```

#### Pre-requisites for Auth0 Gatsby Redux

##### Install modules

If you've cloned this repository in the admin folder, navigate into the directory and install the npm modules using this command:

```bash
npm install
```

#### Running the Admin Gatsby app in the admin folder:

##### Commands

Running the app in localhost:8000:

```bash
gatsby develop
```


## License
MIT (you can use this for whatever you want)

