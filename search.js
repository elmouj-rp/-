const input = document.getElementById('searchInput');
const list = document.getElementById('rulesList');

input.addEventListener('keyup', function() {
  const filter = input.value.toLowerCase();
  const items = list.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent.toLowerCase();
    items[i].style.display = text.includes(filter) ? '' : 'none';
  }
});
