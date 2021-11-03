setInterval(function(){
    let random = Math.floor (Math.random () * QUOTE.length)
    document.getElementById("box").innerHTML = QUOTE[random];
}, TIME_REPLAY);