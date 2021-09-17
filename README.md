# About Repo
This repo is one step ahead of my rest api repo. In this, first rest apis are created with node js along with express server and then connected to react frontend

# API

* It stands for application programming interface
* Application: for example youtube
* Interface: like endpoint, if you want to search something, you search via some endpoint or interface
* Programming: In code, used programming to extract data of application (youtube) via interface(endpoint)

Thus, programming (P) is used to dealt with application (A) via interface (endpoint) (I), collectively becomes API 

# REST

* Respresentational state transfer
* Architectual styple of the web
* A standard/set of guidelines by which we can structure and create api

## Start

1. Create server.js file
2. Npm init (to get package.json)

## Dependencies to Install

* npm i express
* npm i mongoose
* npm i morgan
* npm i nodemon (update package.json)

## GeoJson Library

We have to get nearby locations, for that we required geographical location, and update our schema with it

## URL Parameters

* We use URL parameters to pass get data based longitude and latitude.
* It is placed after api with ? and in key value format separated  by &.
* In order to GET request based on longitude and latitude which are URL parameters, it can be passed by req.query.<paramname> 



