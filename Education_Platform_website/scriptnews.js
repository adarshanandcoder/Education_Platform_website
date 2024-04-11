const newsContainer = document.getElementById('news-container');

const apiKey = '3aece519951f40fab7905dd195931bd0';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;

    for (let i = 0; i < articles.length; i++) {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = `
        <h3 class="news-title">${articles[i].title}</h3>
        <img class="news-image" src="${articles[i].urlToImage}">
        <p>${articles[i].description}</p>
        <a href="${articles[i].url}" target="_blank">Read More</a>
      `;

      newsContainer.appendChild(newsItem);
    }
  })
  .catch(error => console.log(error));