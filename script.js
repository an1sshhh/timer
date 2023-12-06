function startTimer() {
    const minutes = document.getElementById('minutes').value || 0;
    const seconds = document.getElementById('seconds').value || 0;
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
  
    let currentSeconds = totalSeconds;
  
    const timerInterval = setInterval(() => {
      const minutesDisplay = Math.floor(currentSeconds / 60);
      const secondsDisplay = currentSeconds % 60;
  
      document.getElementById('timer').innerText = `${String(minutesDisplay).padStart(2, '0')}:${String(secondsDisplay).padStart(2, '0')}`;
  
      if (currentSeconds === 0) {
        clearInterval(timerInterval);
        // alert('Timer completed!');
      } else {
        currentSeconds--;
      }
    }, 1000);
  }
  