const refs = {
  lookDays: document.querySelector('.value[data-value="days"]'),
  lookHours: document.querySelector('.value[data-value="hours"]'),
  lookMins: document.querySelector('.value[data-value="mins"]'),
  lookSecs: document.querySelector('.value[data-value="secs"]')
}

const СountdownTimer = function ({ selector, targetDate }) {
  this.selector = selector;
  this.targetDate = targetDate;

  this.start = function () {
    const startTime = targetDate;

    setInterval(() => {
      const currentTime = Date.now();
        if (currentTime > startTime) {
          alert('need to put date in future!!');
      }
      const deltaTime = startTime - currentTime;
      const { days, hours, mins, secs } = getTimer(deltaTime)
      refs.lookDays.innerText = days;
      refs.lookHours.innerText = hours;
      refs.lookMins.innerText = mins;
      refs.lookSecs.innerText = secs;
    }, 1000)
  }
};

const timer = new СountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.start()


function pad(value) {
  return String(value).padStart(2, '0')
}

function getTimer(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}