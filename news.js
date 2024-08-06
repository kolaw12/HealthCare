const myMeals = document.getElementById('new');
const myImg = document.getElementById('img');
const mySeafood = document.getElementById('new-con');

fetch('https://newsapi.org/v2/everything?q=nigeria&pageSize=20&apiKey=8d3cf181172d427cb88348f179b61817')
    .then(function (response) {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        if (data.articles.length > 0) {
            // Display the first image
            if (data.articles[0].urlToImage) {
                
            } else {
                myImg.alt = "No image available";
            }

            let datal = '<div class="row">';
            data.articles.forEach((article, index) => {
                datal += `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${article.urlToImage || 'https://cdn.pixabay.com/photo/2022/05/16/01/15/road-7199274_960_720.jpg'}" class="card-img-top" alt="${article.title}">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.description || ''}</p>
                                <a href="${article.url}" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                `;
            });
            datal += '</div>';

            mySeafood.innerHTML = datal;
        }
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });