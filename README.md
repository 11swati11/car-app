# # Welcome to SPA  APP for Buying Car 

I have created an App in which you can change your car buying experience. 
We have the following pages:

* **Car Listing page**: which contains all the available cars with options -
	 * **Filter:** on basis of **Color** and **Manufacturer**.
	 * **Sort:** by mileage in both **ascending** and **descending** order.
	 * **Pagination:** with limit of **10**.

* **Car Detail page**: From the listing page, you can select any car and see the details in a separate detail page with options -
	* **Favorite/Unfavourite:** Add/Remove a car to/from the favorites collection (using local storage).
	* **Back to Listing page:** Back to listing page retaining all the previously applied filter/sorting/pagination.

* **404:** Page Not Found 

# # Steps to Run the App
1.  Clone or download the repository.
2.  Run  `npm cd mock-server`
	* Run  `npm install` 
	* Run `npm start`
	* Runs the server at `http://localhost:3001`. Documentation of the available endpoints can be found at `http://localhost:3001/docs`.
3. Run `npm cd client`
	* Run  `npm install`
	* Run  `npm start`
	* Your browser will open  [http://localhost:3000/](http://localhost:3000/)  automatically. If not enter URL manually.
4.  Enjoy your buying a car.

## Steps to Run the Test Cases

1.  After  `npm install`.
2.  Run  `npm run test`.
3.  Press  `a`  to run all tests.

## Tasks Done

1. [X] List all available cars (implementing pagination with limit of 10).
2. [X] Allow the user to filter the cars by manufacturer.
3. [X] Allow the user to filter the cars by color.
4. [x] Allow the user to sort the car by mileage in both ascending and descending order.
5. [X] Show the details of a selected car in a separate page.
6. [X] Add a car to the favorites collection (using local storage).
7. [X] Remove a car from the favorites collection (using local storage).
8. [X] Built UI without any library.
9. [X] Covered good coverage with test cases
10. [X] Did many performance optimisations like:-

