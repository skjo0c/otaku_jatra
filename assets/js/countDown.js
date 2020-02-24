const countDownDate = new Date('May 16, 2020 11:21:25').getTime();

// Update the count down every 1 second
const countDown = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
  }

  // Output the result in an element with id="demo"
  if (days > 1) {
    document.getElementById('countDown-day-label').innerHTML = 'Days';
  } else {
    document.getElementById('countDown-day-label').innerHTML = 'Day';
  }

  if (hours > 1) {
    document.getElementById('countDown-hour-label').innerHTML = 'Hours';
  } else {
    document.getElementById('countDown-hour-label').innerHTML = 'Hour';
  }
  if (minutes > 1) {
    document.getElementById('countDown-minute-label').innerHTML = 'Minutes';
  } else {
    document.getElementById('countDown-minute-label').innerHTML = 'Minute';
  }
  if (seconds > 1) {
    document.getElementById('countDown-second-label').innerHTML = 'Seconds';
  } else {
    document.getElementById('countDown-second-label').innerHTML = 'Second';
  }

  document.getElementById('countDown-day').innerHTML = days;
  document.getElementById('countDown-hour').innerHTML = hours;
  document.getElementById('countDown-minute').innerHTML = minutes;
  document.getElementById('countDown-second').innerHTML = seconds;
}, 1000);
