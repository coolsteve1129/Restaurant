const createContactPage = () => {
    const contactPgContent = document.getElementById('content') 
    contactPgContent.innerHTML = '';

    const contactDiv = document.createElement('div');
    contactDiv.id = ('contact');

    const name = document.createElement('h2');
    name.innerHTML = 'Contact Us';

    const email = document.createElement('p');
    email.innerHTML = 'Email: contact@example.com';

    const phone = document.createElement('p');
    phone.innerHTML = 'Phone: 123-456-7890';

    contactDiv.appendChild(name);
    contactDiv.appendChild(email);
    contactDiv.appendChild(phone);

    contactPgContent.appendChild(contactDiv);
}
export default createContactPage;