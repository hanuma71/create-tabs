window.addEventListener('DOMContentLoaded', function(){
let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for(let i =a; i< tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i=0; i<tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //таймер
    //получает данные для таймера
    //let deadTime = prompt("введите двту в формате хххх-хх-хх");
    let deadTime = '2020-05-05';
    function getTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours =  Math.floor((t/1000/60/60));
        // console.log(seconds);
        // console.log(minutes);
        // console.log(hours);
        return {
            'total':t,
            'hours':hours,
            'minutes': minutes,
            'seconds':seconds
        };        
    }

  function srtClock(id, endtime){
      let timer = document.getElementById(id),
          showHours = document.querySelector('.hours'),
          showMinutes = document.querySelector('.minutes'),
          showSeconds = document.querySelector('.seconds'),
          timeInterval = setInterval(updateClock, 1000);
          function updateClock(){
            let t = getTimeRemaining(endtime);
            showHours.textContent =  t.hours;
            if(t.minutes < 10){
                showMinutes.textContent = '0' + t.minutes;
            }else{
                showMinutes.textContent = t.minutes;
            } 
            if(t.seconds < 10){
                showSeconds.textContent = '0' + t.seconds;
            }else{
                showSeconds.textContent = t.seconds;
            } 
           
           

            if(t.total <= 0){
                clearInterval(timeInterval);
                showSeconds.textContent = "00";
                showMinutes.textContent = "00";
                showHours.textContent =  "00";
            }



          }


  }
  srtClock('timer', deadTime);
});
