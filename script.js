const initialContent = document.getElementById('initialContent');
const openBtn = document.getElementById('openBtn');
const flowersContainer = document.getElementById('flowersContainer');

openBtn.addEventListener('click', () => {
  initialContent.style.opacity = '0';
  setTimeout(() => {
    initialContent.style.display = 'none';
    flowersContainer.style.display = 'block';
    flowersContainer.style.opacity = '1';
    document.body.classList.add('active-flowers');
  }, 500);
});
