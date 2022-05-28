# rest-api-post-printer

This app simply prints HTTP request received via POST request to the front-end...

Displayed request data: method, query, headers, body

![preview](https://github.com/repetitioestmaterstudiorum/rest-api-post-printer/blob/master/preview.png)

- Requests are deleted automatically after an hour
- All requests are deleted on app startup (droplet/server reboot)

## Accepted formats of request bodies

- x-www-form-urlencoded
- raw/JSON
- furm-data
- multi-part form-data (thanks to multer)

## how to use/deploy

- git clone this repository
- use https://medium.com/@leonardykris/how-to-run-a-meteor-js-application-on-heroku-in-10-steps-7aceb12de234 to deploy to heroku
- post requests to <"your heroku url">/api
