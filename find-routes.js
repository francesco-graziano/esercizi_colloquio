/*

We are tracking down our rogue agent Matthew Knight A.K.A. Roy Miller and he travels from places to places to avoid being tracked. 
Each of his travels are based on a list of itineraries in an unusual or incorrect order.
 The task is to determine the routes he will take in his every journey. You are given an array of routes of his itineraries.
 List down only the places where he will go in correct order based on his itineraries.

Example: routes = [["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"]]

result: "USA, BRA, UAE, JPN, PHL"

Cause routes are in completely random order, try to validate also against:

[["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]

result: "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"

*/

const routes1 = [
    ["USA", "BRA"], 
    ["JPN", "PHL"], 
    ["BRA", "UAE"], 
    ["UAE", "JPN"]
];

const routes2 = [
    ["Chicago", "Winnipeg"], 
    ["Halifax", "Montreal"],
    ["Montreal", "Toronto"], 
    ["Toronto", "Chicago"], 
    ["Winnipeg", "Seattle"]
];

const findRoutes = (routes) => {
    let startingRoute = [];
    let intermediateRoutes = [];
    let results = '';
    for (let i = 0; i < routes.length; i++) {
        const current = routes[i];
        let isAnIntermediateRoute = false;
        for (j = 0; j < routes.length; j++) {
            if(current[0] === routes[j][1]) {
                isAnIntermediateRoute = true;
                intermediateRoutes.push(current);
            }
        }
        if (!isAnIntermediateRoute) {
            startingRoute.push(current);
            results = current[0] + ", " + current[1] + ", ";
        }   
    } 
    let k = 0;
    while(k < intermediateRoutes.length) {
        if (intermediateRoutes[k][0] === startingRoute[0][1]) {
            startingRoute[0] = intermediateRoutes[k];
            results += intermediateRoutes[k][1] + ", "
            k = 0;
        } else {
            k++;
        }
    } 
    return results.substring(0, results.length - 2);
}

const fRoutes1 = findRoutes(routes1);
const fRoutes2 = findRoutes(routes2);
console.log(fRoutes1);
console.log(fRoutes2);
