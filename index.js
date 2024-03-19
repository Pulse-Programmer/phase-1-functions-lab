function distanceFromHqInBlocks(pickUpPoint) {
    const scuberHq = 42;
    let numberOfBlocks = Math.abs(pickUpPoint - 42);
    return numberOfBlocks;
  }

function distanceFromHqInFeet(pickUpPoint) {
    let blockDist = distanceFromHqInBlocks(pickUpPoint);
    const blockFeetDist = 264;
    
    return blockFeetDist * blockDist
   // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start-destination)) * 264;
}

function calculatesFarePrice(start, destination) {
    let distInFeet = distanceTravelledInFeet(start, destination);
    let fare = 0;

    if (distInFeet > 2500) {
        return "cannot travel that far";

    } else if (distInFeet > 2000) {
        return fare = 25;

    } else if (distInFeet > 400) {
        fare = (0.02 * (distInFeet-400));
        return fare;

    } else {
       return fare;
    }
  }

 