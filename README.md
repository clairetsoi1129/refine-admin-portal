# refine-admin-portal
## Introduction
This application is a fully functional full-stack MERN application with complete CRUD functionalities, authentication, pagination, sorting, filtering.

## Technology
MongoDB (Mongoose) as database, React.js with Refine and Material UI and Typescript as frontend, Node.js with ExpressJS framework as backend.

## Feature
1. It supports user login using Google Auth
2. It has a fully functional dashboard generating with apexcharts. 
3. It has property management page with CRUD functionalities

## Pre-requiste for development
1. Obtain OAuth 2.0 credentials from the Google API Console and get the Google Client ID and Google Client Secret
2. Register in Cloudinary to get the Cloud name, API key, API secret
3. Setup a database in MongoDB and get connection string


## How to start frontend dev
> Create the react application with Refine in client folder
```
npm create refine-app@latest client
```

> change directory to client foler
```
cd client
```

> install apexcharts for creating dashboard
```
npm install apexcharts react-apexcharts
```

> use swizzle to create the header.tsx / sider.tsx / title.tsx under src/components/themedLayout folder for customization
```
npm run refine swizzle
```

## How to launch frontend
```
cd client
npm run dev
```

## How to start backend dev
> change directory to server
```
cd server
```

> create the node js application
```
npm init -y
```

> install related library
```
npm install cloudinary cors dotenv express mongoose nodemon
```

## Future thoughts
1. Currently the chart data is hard coded, future thoughts is to use node.js to build REST API to provide the chart data.


## Reference
The code here is basically following the tutorial in JavaScript Mastery https://www.youtube.com/watch?v=k4lHXIzCEkM with below changes.

1. Since Refine 4.14.0 has quite a lot of difference from Refine 3.X.X as described in the tutorial, I used swizzle command in refine to generate the missing compoents and do the customization. 
2. Also, the Refine 4.14.0 has changed a lot of library, so the import statement is also updated followed the documentation in Refine. 