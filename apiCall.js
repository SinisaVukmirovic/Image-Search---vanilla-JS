const API_URL = `https://nature-image-api.now.sh/search?q=`;

export default async function searchImage(searchTerm) {
    const response = await fetch(`${API_URL}${searchTerm}`);

    const json = await response.json();

    console.log(json);
    return json;
}