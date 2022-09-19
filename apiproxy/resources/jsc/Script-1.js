 var url = "https://mocktarget.apigee.net/json";
// var headers = {
//                         'Authorization': 'Basic Q1JNQmFzaWNBdXRoVXNlcjpydWxlcw=='
//                     };

                    var myRequest = new Request(url, "GET");
                    var CalloutData = httpClient.send(myRequest);
                    var res = CalloutData.getResponse();
                    print("1:", (res.content));
                    context.setVariable("testxxx", res.content);