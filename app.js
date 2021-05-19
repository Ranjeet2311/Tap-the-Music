const sounds = document.querySelectorAll('.sounds');
const keys = document.querySelectorAll('.keys');


keys.forEach((keys, index) =>{
      keys.addEventListener('click', function(){
            sounds[index].currentTime = 0
            sounds[index].play();
            
      })
})