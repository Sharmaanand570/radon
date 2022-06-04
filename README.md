# radon 
Backend cohort Feb 2022 - May 2022

Assignment/routes - branch

Problem Statement :

- NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits )
Your player collection should be an ARRAY of player objects. Each player object should have the following attributes:

- e.g. the players array would look like this:
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
 

- Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)

- NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits)

