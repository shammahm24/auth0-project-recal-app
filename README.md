# ReCal

## Video

## About
This is an application that keeps track users that collect dispossible masks from an institution and rewards them when they dispose their used masks in designated locations.

The application ensures there is no person to person contact by making use of a qrcode scanning feature which also add to the speed and efficiency of using the application, since the client has to perform only one action of opening the scanner.

## How it works

This app is made out of two different parts, one tablet app for the recieving part ( the college or the company ) and one mobile app for the
studens or workers at the company.

When the student or worker at the company wants to deliver or collect masks, gloves, alcool bottles, he goes to the disposing office in the company or university.
There he will find another person who is using the admin app, and has the responsibility to give or recieve masks.

To do this transaction between the user and the company or university, the user gives the items, and then points to the QR code that is in the tablet admin app.

If the transaction is authorized, the user then recieves points, which can be exchanged by starbucks coffees, dominos pizzas, and more.


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
https://drive.google.com/file/d/1unlk40ZvbruTjugu9BUrk0XCT0Kg0NBX/view?usp=sharing

### Web Client (Admin App) 
#### This is a tablet app, use in 1024 x 756 
https://gatsby-auth0-redux.vercel.app/account



## How to use it

### For the Android app you can:


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
MIT

