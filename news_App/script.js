const API_KEY = "7368394c9fb04987aec6decea0d09953";
const URL = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("Headlines"));

async function fetchNews(query) {
    //console.log(query);
    // https://newsapi.org/v2/everything?q=tesla&from=2024-10-11&sortBy=publishedAt&apiKey=API_KEY

    let res = await fetch(`${URL}${query}&from=2024-11-10$apiKey=${API_KEY}`);

    let data = await res.json();

    console.log(data);
    console.log(data.articles);
    bindNews(data.articles);
}
  const bindNews = (articles) => {
    if (articles.length > 0) {
      var str = ``;
      articles.forEach((articles) => {
        str += `<div class="col-xl-4 news-card">
          <div class="card">
            <img src="${article.urlToImage}" class="card-img-top" alt="newa-img" />
            <div class="card-body">
              <h4 class="card-title">${article.title}</h4>
              <h6>${article.source.name} 🔊 ${article.publishedAt}</h6>
              <p class="card-text">
               ${article.description}</p>
              </p>
              <a href="${article.url}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>`;
        document.querySelector(".row").innerHTML = str;
      });
    }

    // console.log(data);
  };

