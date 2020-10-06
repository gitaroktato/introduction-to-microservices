var SwaggerHelloWorld = require('./index.js'); 

var greetApi = new SwaggerHelloWorld.GreetApi();
greetApi.greet((error, data) => console.log(data));

var user = new SwaggerHelloWorld.User();
user.firstName = "John";
user.lastName = "Smith";

var userApi = new SwaggerHelloWorld.UserApi();
userApi.greetUser(user, (error, data) => console.log(data));