
# Welcome to SPA  APP for Buying Car

I have created an App in which you can change your car buying experience.
We have the following pages:

* **Car Listing page**: which contains all the available cars with options:-
     * **Filter:** on basis of **Color** and **Manufacturer**.
     * **Sort:** by mileage in both **ascending** and **descending** order.
     * **Pagination:** with limit of **10** results per page.

* **Car Detail page**: From the listing page, you can select any car and see the details in a separate detail page with options -
    * **Favorite/Unfavourite:** Add/Remove a car to/from the favorites collection (using local storage).
    * **Back to Listing page:** Back to listing page retaining all the previously applied filter/sorting/pagination.

* **404:** Page Not Found

# # Steps to Run the App
1.  Clone or download the repository.

2.  Type `cd mock-server` from root directory.
    * Run  `npm install`
    * Run `npm start`
    * Runs the server at `http://localhost:3001`. Documentation of the available endpoints can be found at `http://localhost:3001/docs`.

3. Type  `cd client` from root directory.
    * Run  `npm install`
    * Run  `npm start`
    * Your browser will open  [http://localhost:3000/](http://localhost:3000/)  automatically. If not enter URL manually.

4.  Enjoy buying a car.

## Steps to Run the Test Cases

1.  After  `npm install`.
2.  Run  `npm run test`.
3.  Press  `a`  to run all tests.

## Tasks Done

 - [X] List all available cars (implementing pagination with limit of 10).
 - [X] Allow the user to filter the cars by manufacturer.
 - [X] Allow the user to filter the cars by color.
 - [x] Allow the user to sort the car by mileage in both ascending and descending order.
 - [X] Show the details of a selected car in a separate page.
 - [X] Add a car to the favorites collection (using local storage).
 - [X] Remove a car from the favorites collection (using local storage).
 - [X] CSS-in-JS is used for styling purpose. Using [styled-components](https://www.styled-components.com) for styling.
 - [X] App is responsive (No external CSS/UI framework is used).
 - [X] Covered good coverage with test cases
 - [X] Did many performance optimizations like: 	
	 - [X] By using lifecycle methods to prevent unnecessary network calls and re-rendering.
	 - [X] More usage of dumb/functional components.
	 - [X] Preventing network request for already requested car details.
11. [X] Using custom middlewares to handle Favorite/Unfavourite into local storage.
12. [X] Using Higher Order Reducers, so that code should be more clean, maintainable and extensible.
13. [X] App is deployed on [https://carapp.swatichoudhary1155.now.sh](https://carapp.swatichoudhary1155.now.sh)
