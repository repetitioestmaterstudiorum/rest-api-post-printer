# rest-api-printer

This app simply prints HTTP request received via POST request to the front-end...

Displayed request data: method, query, headers, body

![preview](https://github.com/repetitioestmaterstudiorum/rest-api-printer/blob/master/preview.png)

-   Requests are deleted automatically after an hour
-   All requests are deleted on app startup (droplet/server reboot)

## Accepted formats of request bodies

-   x-www-form-urlencoded
-   raw/JSON
-   furm-data
-   multi-part form-data (thanks to multer)

## how to use

-   git clone this repository
-   npm run dev
-   post requests to <"app url">/api
