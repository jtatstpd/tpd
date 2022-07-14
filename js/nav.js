const logoItems = document.querySelectorAll('.nav-group-logo li a');
const colorItems = document.querySelectorAll('.nav-group-colors li a');
const typeItems = document.querySelectorAll('.nav-group-type li a');
const resourceItems = document.querySelectorAll('.nav-group-resource li a');



/* Nav Smooth scroll
 */


// Nav active colors
// Logo start
let logoWaypoint = new Waypoint({
    element: document.getElementById("logo"),
    handler: function (direction) {

        for (i = 0; i < logoItems.length; i++) {
            logoItems[i].classList.add("active-coal");
        }
    },
    offset: "0%",
});

let logoWaypointEnd = new Waypoint({
    element: document.getElementById("colors"),
    handler: function (direction) {

        for (j = 0; j < logoItems.length; j++) {
            logoItems[j].classList.remove("active-coal");
        }

    },
    offset: "0%",
});
//Logo end

//Colors start
let colorWaypoint = new Waypoint({
    element: document.getElementById("colors"),
    handler: function (direction) {

        for (k = 0; k < colorItems.length; k++) {
            colorItems[k].classList.add("active-coal");
        }
    },
    offset: "0%",
});

let colorWaypointEnd = new Waypoint({
    element: document.getElementById("typography"),
    handler: function (direction) {

        for (l = 0; l < colorItems.length; l++) {
            colorItems[l].classList.remove("active-coal");
        }
    },
    offset: "0%",
});
//Colors end


//Typography start
let typeWaypoint = new Waypoint({
    element: document.getElementById("typography"),
    handler: function (direction) {

        for (m = 0; m < typeItems.length; m++) {
            typeItems[m].classList.add("active-coal");
        }
    },
    offset: "0%",
});

let typeWaypointEnd = new Waypoint({
    element: document.getElementById("iconography"),
    handler: function (direction) {

        for (n = 0; n < typeItems.length; n++) {
            typeItems[n].classList.remove("active-coal");
        }
    },
    offset: "10%",
});
//Typographiy end

//Resources start
let resourceWaypoint = new Waypoint({
    element: document.getElementById("resources"),
    handler: function (direction) {
        for (o = 0; o < resourceItems.length; o++) {
            resourceItems[o].classList.add("active-coal");
        }
    },
    offset: "0%",
});


