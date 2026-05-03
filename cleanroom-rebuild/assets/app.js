
const trigger = document.querySelector('[data-trigger]');
const menu = document.querySelector('[data-drawer]');
if (trigger && menu) {
  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isOpen));
    menu.hidden = isOpen;
  });
}
