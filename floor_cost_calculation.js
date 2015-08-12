var getCost = function(sqFtCost, floorHeight, floorWidth) {
  "use strict";
  return "It Will Cost ₦ " + sqFtCost * floorHeight * floorWidth + " For " + floorHeight * floorWidth + " Square Feet.";
};

this.console.log(getCost(100, 5, 6));
