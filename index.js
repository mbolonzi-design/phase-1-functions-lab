// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if(location === 50){
        return 50 - 42
    }else if(location === 43){
        return 43 - 42
    }else{
        return 42 - 34
    }
} 

const distanceFromHqInFeet = (location) => {
    if(location === 50) {
       return distanceFromHqInBlocks(location) * 264 
    } else if(location === 43) {
      return  distanceFromHqInBlocks(location) * 264
    } else {
       return distanceFromHqInBlocks(location) * 264 
    }
}

const distanceTravelledInFeet = (firstBlock, secondBlock) => {
    let distanceBetweenBlocks = Math.abs(firstBlock - secondBlock);
    return distanceBetweenBlocks * 264
}
console.log(distanceTravelledInFeet)

const calculatesFarePrice = (start, destination) => {
    if(distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if(distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) < 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    }
    else if(distanceTravelledInFeet(start, destination) <= 2500 & distanceTravelledInFeet(start, destination) > 2000){
        return 25
    } else if(distanceTravelledInFeet(start, destination) > 2500){
        return 'cannot travel that far'
    }
}