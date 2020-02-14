# Vue.JS-Exercise

## Sort it

Just simply open the index.html

## Show it

#### 1. Install the dependencys
```
npm install
```

#### 2. Run the vue server
```
npm run serve
```

#### 3. Go to your browser and open the url showed after starting the server

e.g.: [http://localhost:8080/](http://localhost:8080/)

## Ride it

#### 1. Install and start MySQL server

[Download wamp server](wampserver.com/en/download-wampserver-64bits/)

#### 2. Create the database

```
CREATE DATABASE ride_it CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
```

#### 3. Start the Spring-boot server

(If you have changed the default user name, password or port of the MySQL server change them inside the ``` ride_it_Spring\src\main\resources\application.properties```)

##### If you have maven installed in cmd go to the ```ride_it_Spring``` folder and run

```
mvn spring-boot:run
```

#### 4. Install the dependencys for ```ride_it``` 
```
npm install
```

#### 5. Run the vue server
```
npm run serve
```

#### 6. Go to your browser and open the url showed after starting the server

e.g.: [http://localhost:8080/](http://localhost:8080/)

