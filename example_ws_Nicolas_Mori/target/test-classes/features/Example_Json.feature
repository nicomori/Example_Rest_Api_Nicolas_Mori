@Regression @JsonAutomation
Feature: NetEnt - interview Nicolas Mori

Scenario Outline: Make a differents types of actions with Json.

Given the url "<url>" and the database "<db>"
And I make the action "<function>" using this id "<id>", this userId "<userId>", and this title "<title>"

Examples:
| url		   		 		 | db 	| id	| userId | title				| function			|
| http://localhost:3000/	 | post | 		| 		 | 						| get a list		|
| http://localhost:3000/	 | post | 13	| 25	 | Automation Title		| get a register	|
| http://localhost:3000/	 | post | 7		| 23	 | Automation Title		| update a register	|
| http://localhost:3000/	 | post | 112	| 62	 | Automation Title		| insert a register	|
| http://localhost:3000/	 | post | 3		| 22	 | Automation Title		| delete a register	|
