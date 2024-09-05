
let hour = document.getElementById('hour') ;
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let ampm = document.getElementById('ampm');

function clock() {
      
      let vlaue = new Date();
      let Hour = vlaue.getHours()
      let current_hour = Hour % 12 || 12;
      let current_minute = vlaue.getMinutes();
      let current_second = vlaue.getSeconds();
      let current_ampn = ampm >= 12 ? 'AM' : 'PM'

      hour.textContent = `${current_hour  < 10 ?'0' :  ''}${current_hour} : `
      minute.textContent = `${current_minute < 10 ?'0' : ''}${current_minute}  :`
      second.textContent = `${current_second < 10 ?'0' : ''}${current_second}` ;
      ampm.textContent = current_ampn
}
setInterval(clock , 1000)