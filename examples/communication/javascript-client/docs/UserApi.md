# SwaggerHelloWorld.UserApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**greetUser**](UserApi.md#greetUser) | **POST** /user/greet | Greeting to a specific user


<a name="greetUser"></a>
# **greetUser**
> 'String' greetUser(body)

Greeting to a specific user

This can only be done with a specific user.

### Example
```javascript
var SwaggerHelloWorld = require('swagger_hello_world');

var apiInstance = new SwaggerHelloWorld.UserApi();

var body = new SwaggerHelloWorld.User(); // User | User object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.greetUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| User object | 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

