function createMenuPage() {
    const menuPgContent = document.getElementById('content');
    menuPgContent.innerHTML = '';
  
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
  
    const heading = document.createElement('h2');
    heading.innerHTML = 'Menu';
  
    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Glorp';
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Snarf Burger';
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Burger';
  
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
  
    menuDiv.appendChild(heading);
    menuDiv.appendChild(menuList);
  
    menuPgContent.appendChild(menuDiv);
  }
  
  export default createMenuPage;