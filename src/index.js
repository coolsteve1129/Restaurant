import createContactPage from './contact';
import createMenuPage from './menu';
import './styles.css';

function createTabElement(id, textContent, clickHandler) {
  const tab = document.createElement('div');
  tab.id = id;
  tab.classList.add('tab');
  tab.textContent = textContent;
  tab.addEventListener('click', clickHandler);
  return tab;
}

const createHomePage = () => {
  const homePageContent = document.getElementById('content');
  homePageContent.innerHTML = '';

  const title = document.createElement('h1');
  title.innerHTML = "The Restaurant at the End of the World";
  title.id = 'title';
  homePageContent.appendChild(title);

  const hPDescription = document.createElement('p');
  hPDescription.innerHTML = "Come one come all to the greatest show on earth!"
    + " You can watch the universe end all while enjoying food from our delicious menu. Some of our dishes"
    + " include Glorp, Snarf Burgers (made with free-range snarfalope no hormones added)"
    + ", as well as our Universe-famous Schlafgidulorsic."
    + " Watch the universe collapse all in one evening filled "
    + "with explosions as well as implosions of destruction."
    + " It'll be quite the spectacle you'll wish you could come back for!!!";
  hPDescription.id = 'hPDescription';
  homePageContent.appendChild(hPDescription);
};

let activeTab = null;

const createTabsContainer = () => {
  const tabsContainer = document.createElement('div');
  tabsContainer.id = 'tabs';
  document.body.insertBefore(tabsContainer, document.getElementById('content'));
  return tabsContainer;
};

const activateTab = (tab) => {
  if (activeTab === tab) return;

  if (activeTab) {
    activeTab.classList.remove('active');
  }

  activeTab = tab;
  activeTab.classList.add('active');
};

const tabsContainer = createTabsContainer();

const homeTab = createTabElement('homeTab', 'Home', () => {
  activateTab(homeTab);
  createHomePage();
});

const contactTab = createTabElement('contactTab', 'Contact', () => {
  activateTab(contactTab);
  createContactPage();
});

const menuTab = createTabElement('menuTab', 'Menu', () => {
  activateTab(menuTab);
  createMenuPage();
});

tabsContainer.appendChild(homeTab);
tabsContainer.appendChild(contactTab);
tabsContainer.appendChild(menuTab);

createHomePage();