# refine-admin-portal
## Introduction
This application is a fully functional full-stack MERN application with complete CRUD functionalities, authentication, pagination, sorting, filtering. It is 

## Technology
MongoDB (Mongoose), Express.js, React.js with Refine and Material UI, Node.js, Typescript. 

## Feature
1. It supports user login using Google Auth
2. It has a fully functional dashboard generating with apexcharts
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

> install webpack
```
npm install webpack webpack-cli --save-dev
```

## How to deploy to Google Cloud

> For Server (Node.js)
```

gcloud config set project yariga-385216
git clone https://github.com/clairetsoi1129/refine-admin-portal.git


1. Clone your repository into your home directory:
git clone https://github.com/username/reponame.git
2. Change into your repo directory: cd reponame
3. Install the dependencies: npm install
4. Set environmental variables with an app.yaml file: touch app.yaml
5. Run build (if needed): npm run <build script name>
6. Make sure your package.json has a working start script
7. Preview your app
8. Deploy: gcloud app deploy

```


## Reference
The code here is basically following the tutorial in JavaScript Mastery https://www.youtube.com/watch?v=k4lHXIzCEkM with below changes.

1. Since Refine 4.14.0 has quite a lot of difference from Refine 3.X.X as described in the tutorial, I used swizzle command in refine to customize the components. 
2. Also, the Refine 4.14.0 has changed a lot of library, so the import statement is also updated followed the documentation in Refine. 
3. 