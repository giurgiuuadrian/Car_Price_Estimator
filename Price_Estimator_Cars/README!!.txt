Here are the steps in order to start this web app:

1. copy the folder "app" in your www folder (if you using Wamp, I do)

2. next you have to open 2 cmds/terminals and navigate in both to www/app foledr (e.g. : cd C:\wamp64\www\app):
	- in first cmd you have to enter:  json-server --watch db_licenta.json --port 4000
	- and in the second : 		   json-server --watch db_listaVR.json --port 3000

3. run your wamp/xampp server

4.navigate in your browser to http://localhost/app/paginaprin.php