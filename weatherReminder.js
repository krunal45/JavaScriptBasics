function weatherAlert(currentTemp){
    if(currentTemp<32)
        return "Bundle up buddy !";
    else if(currentTemp>=32 && currentTemp<=70)
        return "dress warmly !";
    else
        return "wear light clothing";        
}

let currentTemp = 72;
console.log(`If current Temperature is ${currentTemp} then `+weatherAlert(currentTemp));