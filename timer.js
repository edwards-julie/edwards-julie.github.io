(function () {
    console.log('timer')
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    const saleDate = '06/11/2024';
    
    const countDown = new Date(saleDate).getTime() + ((7 * 60 + 1) * 60000),
        x = setInterval(function() {    
  
            const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
           // document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        }, 0)
    }());