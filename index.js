function distanceFromHqInBlocks(num1){
return Math.abs(num1- 42);
}
distanceFromHqInBlocks (43,50,34);

function distanceFromHqInFeet(num1){
    return ((Math.abs(num1- 42))*264);
}
distanceFromHqInFeet;

function distanceTravelledInFeet(block_start, block_destination){
    if (block_destination > block_start) {
    return (block_destination - block_start) * 264;
    } else {
        return (block_start - block_destination) * 264;
    }
}
function calculatesFarePrice (start, destination) {
    let feet = distanceTravelledInFeet (start, destination);
    if (feet <= 400) {
        return (feet * 0);
    } 
    else if (feet > 400 && feet <= 2000){
        return (feet-400) * 0.02;
    }
    else if (feet > 2000 && feet <2500){
        return (25);
    }
    else if (feet >= 2500) {
        return ('cannot travel that far');
    }
}
