# rest-api-post-printer

Simply prints whatever is received via POST request...
All entries are deleted on app startup. That is designed not to overflow the database. So if you use a free container on Heroku and some free MongoDB, it should never cost you anything.
Documents are deleted after an hour.

## how to use

- git clone this repository
- use https://medium.com/@leonardykris/how-to-run-a-meteor-js-application-on-heroku-in-10-steps-7aceb12de234 to deploy to heroku
- post requests to <"your heroku url">/api

## how it looks like

![how it looks like](https://github.com/sunyamare/rest-api-post-printer/blob/master/teaser.png)
