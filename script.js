const door = document.querySelector('#door');
const doorBtn = document.querySelector('#open');
const glow = document.querySelector('.glow');

let stat = true;
doorBtn.innerText = 'close';

function toggleState() {
  stat = !stat;
}

function toggleDoor() {
  if (doorBtn.style.pointerEvents === 'none') return;

  if (stat) {
    door.style.transform = 'perspective(0px)';
    doorBtn.innerText = 'open';
    glow.style.opacity = '0';
  } else {
    door.style.transform = 'perspective(200px) rotateY(70deg)';
    doorBtn.innerText = 'close';
    glow.style.opacity = '1';
  }

  doorBtn.style.pointerEvents = 'none';
  doorBtn.style.color = 'red';

  setTimeout(() => {
    doorBtn.style.pointerEvents = 'auto';
    doorBtn.style.color = '';
  }, 1500);

  toggleState();
}

doorBtn.onclick = toggleDoor;

document.body.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    toggleDoor();
  }
});
