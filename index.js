const headQuarters = '42';
const distanceOfBlock = '264';
function distanceFromHqInBlocks(startingPoint){
    if (startingPoint >= 42){
    return startingPoint - headQuarters;
} else if(startingPoint < 42) {
    return headQuarters - startingPoint;
}
}
let tripOne = distanceFromHqInBlocks(43);
alert(tripOne);
let tripTwo = distanceFromHqInBlocks(50);
alert(tripTwo);
let belowHq = distanceFromHqInBlocks(34);
alert(belowHq);

function distanceFromHqInFeet(startingPoint) {
    distanceFromHqInBlocks(startingPoint);  
return distanceFromHqInBlocks(startingPoint) * distanceOfBlock;
    }

function distanceTravelledInFeet(start, destination) {
        if(start >= 42){
        return (destination - start) * distanceOfBlock;
      } else if(start < 42) {
        return (start - destination) * distanceOfBlock;
      }
    }
let stopOne = (43,48)
let stopTwo = (50,60)
let stopThree = (34,28) 

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
         if(distanceTravelledInFeet(start, destination) < 400){
         return(0)
            }   
            if(distanceTravelledInFeet(start, destination) > 2500){
            return('cannot travel that far')
            }
             if(distanceTravelledInFeet(start, destination) <= 2000){
             return ((distanceTravelledInFeet(start, destination)-400) * .02)
             } 
             if(distanceTravelledInFeet(start, destination) > 2000){
            return (25)       
    }
}
let freeOne = (43,44)
let betweebOne = (34,32)
let overOne = (50,58)
let NoOne = (34,24)
alert(NoOne);
 