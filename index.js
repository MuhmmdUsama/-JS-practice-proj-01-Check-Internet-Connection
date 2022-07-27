let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

onload = () => {
  if (window.navigator.onLine) {
    online();
    console.log('Online');
  } else {
    offline();
    console.log('Offline');
  }
};

window.addEventListener('online',online);
window.addEventListener('offline',offline)

reload.addEventListener('click',()=>{location.reload()})

function online() {
  title.innerHTML = 'Online Now';
  ul.classList.add ('hide');
  title.classList.add('title-color');
  //   title.style.color = 'green';
  reload.classList.add('hide');
}

function offline() {
  title.innerHTML = 'Offline Now';
  title.classList.remove('title-color');
  ul.classList.remove ('hide');
  reload.classList.remove ('hide');
}

