  // Set the date we're counting down to
  const countDownDate = new Date("Mar 1, 2022, 23:59:59").getTime();
  // Update the count down every 1 second
  function countDown() {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distace between now and the count down date
    let distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("countDown_id").innerHTML = days + "J " + hours + "H "
    + minutes + "M " + seconds + "S ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "L'Aléodrome est ouvert";
    }
  }

export { countDown };
