function distanceFromHqInBlocks(x) {
   return Math.abs(42-x);
}

function distanceFromHqInFeet(f){
    return distanceFromHqInBlocks(f)*264;
}   

function distanceTravelledInFeet(x,y){
    return (Math.abs(x-y)*264);
}

function calculatesFarePrice(x,y){
    let z = (Math.abs(x-y)*264);
    if(z<400){
        return 0;
    }
    else if (z < 2000){
        return ((z-400)*0.02);
    }
    else if (z < 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}