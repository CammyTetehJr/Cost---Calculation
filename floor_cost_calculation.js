var getCost = function(sqFtCost, floorHeight, floorWidth) {      // here I create a variable getCost to store the value of the function with a square foot cost, floor height and floor width as arguments.
 
  return "It Will Cost ₦ " + sqFtCost * floorHeight * floorWidth + " For " + floorHeight * floorWidth + " Square Feet.";
};

this.console.log(getCost(100, 5, 6));      // here I am testing my code with a user data square foot cost of ₦100 per square foot of tile and floor height of 5 feet and floor width of 6 feet.
