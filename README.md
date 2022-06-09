# radon 
Backend cohort Feb 2022 - May 2022

Assignment - Book Collection

- Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

- create the following API’s (write logic in bookController and routes in routes):

- createBook : to create a new entry..use this api to create 11+ entries in your collection

- bookList : gives all the books- their bookName and authorName only 

- getBooksInYear: takes year as input in post request and gives list of all books published that year

- getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
e.g if body had { name: “hi”} then you would fetch the books with this name
if body had { year: 2020} then you would fetch the books in this year
hence the condition will differ based on what you input in the request body

- getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

- getRandomBooks - returns books that are available in stock or have more than 500 pages


Optional Assignments:

- Write an api GET /books-by-authorid/<Author_Id> (for example /books/1 or /books/2 etc) that returns all the books written by the author with an id <Author_Id>. Only return the names of these books

- Find a list of authors whose are older than 50 years of age with at least one book that has a rating greater than 4. Only include the author’s names and their ages in the response for this api
