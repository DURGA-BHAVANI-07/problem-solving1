//1q
let isRoomOccupied = false; // Is anyone in the room?
let isHomeOccupied = false; // Is anyone home?
let season = "winter"; // Current season: "winter" or "summer"
let lightsOn = true; // Are lights currently on?
let temperature = 20; // Default temperature
let doorsLocked = false; // Are doors currently locked?

function manageLights() {
  if (!isRoomOccupied) {
    lightsOn = false;
    console.log("Lights turned off because nobody is in the room.");
  } else {
    lightsOn = true;
    console.log("Lights are on because the room is occupied.");
  }
}

function adjustTemperature() {
  if (season === "winter") {
    temperature = 22;
    console.log("Temperature set to 22°C for winter.");
  } else if (season === "summer") {
    temperature = 18;
    console.log("Temperature set to 18°C for summer.");
  }
}

function manageSecurity() {
  if (!isHomeOccupied) {
    doorsLocked = true;
    console.log("Doors locked because nobody is home.");
  } else {
    doorsLocked = false;
    console.log("Doors unlocked because someone is home.");
  }
}

manageLights();
adjustTemperature();
manageSecurity();

console.log(`System Status:
- Lights On: ${lightsOn}
- Temperature: ${temperature}°C
- Doors Locked: ${doorsLocked}`);

//2q
let mathScore = 55;    
let scienceScore = 45; 

function checkGraduationEligibility(math, science) {
    if (math >= 50 && science >= 50) {
        console.log("The student passes and is eligible to graduate.");
    } else {
        console.log("The student does not pass and is not eligible to graduate.");
    }
}
checkGraduationEligibility(mathScore, scienceScore);

//3q
let ticketPrice = 450;
let departureTime = "morning"; 
let hasMeal = false; 

function checkFlight(ticketPrice, departureTime, hasMeal) {
  if (ticketPrice < 500 && (departureTime === "morning" || hasMeal)) {
    console.log("Flight meets criteria. Ticket booked!");
  } else {
    console.log("Flight does not meet criteria. Looking for another flight.");
  }
}

checkFlight(ticketPrice, departureTime, hasMeal);

//4q
let ram = 8;                  
let hasGoodGraphicsCard = true;
let price = 75000;            
function checkLaptop(ram, hasGoodGraphicsCard, price) {
    if (ram >= 8 && hasGoodGraphicsCard && price <= 80000) {
        console.log("Laptop meets criteria. Purchase made!");
    } else {
        console.log("Laptop does not meet criteria. Looking for alternatives.");
    }
}
checkLaptop(ram, hasGoodGraphicsCard, price);

//5q
let attendancePercentage = 85;  
let grade = "B";                
function canAttendTrip(attendance, grade) {
    if (attendance > 80 && (grade === "A" || grade === "B")) {
        console.log("The student meets the criteria and can attend the class trip.");
    } else {
        console.log("The student does not meet the criteria and cannot attend the class trip.");
    }
}
canAttendTrip(attendancePercentage, grade);




