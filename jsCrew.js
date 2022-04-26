const clientSecret = 'AQDoN-WPrhZmYvUwNBK-aZjs50fJ55UK77-m8pBTNjHOH9Y-1lMlaBx1ISXW5zmgv7Pnbo26xgfja0dYg5VFeq5HRx2nukp2cgyU6WtRUFmDkD5sa4iPGpQBnyBhIBl6HiFnweBL9RIHWUuTBlkcgPLrF1FMcfkRO0T7ZHsnJbFvfBSiIUKdw5IdWwJpzswC7CNHFAo7Vgp73vx9YlSwPGZmLm5NnsWo6Ah86LB9pN0kjw';
const endPoint = 'https://api.instagram.com/oauth/access_token';
const secretCode = '4bea883f06458b7fa1abb81503e52bc3';
const codeApp = '977020549630025';
const redirectUrl = 'https://www.GabsRestaurant.it/';
const endPointImg = 'https://graph.instagram.com/me/'
let token;
let user_id;
let username;

function onJson2(json) {
    const results = json.data
    console.log(results)
    const user = document.querySelector('h1')
    user.textContent = results[0].username
    var urlString = 'url(' + results[0].media_url + ')';
    const img1 = document.getElementById('three').style.backgroundImage = urlString
    var urlString = 'url(' + results[1].media_url + ')';
    const img2 = document.getElementById('two').style.backgroundImage = urlString
    var urlString = 'url(' + results[2].media_url + ')';
    const img3 = document.getElementById('one').style.backgroundImage = urlString


}

function onJson(json) {
    token = json.access_token
    user_id = json.user_id
    fetch(endPointImg + 'media?fields=media_url,username&access_token=' + token).then(response).then(onJson2)
}

function response(resp) {
    return resp.json();
}

fetch(endPoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'client_id=' + codeApp + '&client_secret=' + secretCode + '&grant_type=authorization_code&redirect_uri=' + redirectUrl + '&code=' + clientSecret
}).then(response).then(onJson)