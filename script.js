const form = document.querySelector('form');
const searchingImg = document.querySelector('#searchingImg');

searchingImg.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // using FormData - a global object in the browser
    const formData = new FormData(form);

    // FormData allows us to get acces to any element inside that form that has a name property
    const searchTerm = formData.get('search-term');

    searchingImg.style.display = '';
    console.log(searchTerm);
    
});