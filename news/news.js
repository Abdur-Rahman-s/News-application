
async function news() {
      try{
            let response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_52715331db73993c9e1bda681c41b062927d8&q=bangladesh `);

            let deta = await response.json();
            let newsList = deta.results;

            let container = document.querySelector('.main-container');

            newsList.forEach(news => {
                  let newsitem = document.createElement('div');
                  newsitem.classList.add('news-item'); 
                  newsitem.innerHTML = `
                  <h2>${news.title}</h2> 
                  <img src="${news.image_url}" alt="">
                  <p>${news.description}</p>
                  <a href="${news.link}" target="_blank">Read more</a>
                  `
                  container.appendChild(newsitem)
            })
      }
      catch(error) {
            console.error('deta is not found', error)
      }

}
news() 