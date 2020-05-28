import searchImage from './apiCall.js';

const form = document.querySelector('form');
const searchingImg = document.querySelector('#searchingImg');
const imagesSection = document.querySelector('.images');

searchingImg.style.display = 'none';

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // using FormData - a global object in the browser
    const formData = new FormData(form);

    // FormData allows us to get access to any element inside that form that has a name property
    const searchTerm = formData.get('search-term');

    searchingImg.style.display = '';
    
    const images = await searchImage(searchTerm);
    console.log((images));

    displayImages(images);
});

function displayImages(images) {
    imagesSection.innerHTML = '';

    images.forEach(item => {
        const imgElem = document.createElement('img');

        imgElem.src = item.image;

        imagesSection.append(imgElem);
    });

    searchingImg.style.display = 'none';
}