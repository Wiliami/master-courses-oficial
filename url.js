
// console.log(url)
// var urlSplit = url.split("")[5];
// console.log(urlSplit)

function urlAmigavel() {
    // let urlAtual = window.location.origin;
    let url = window.location.pathname;

    let pathnameUrl = url.replace(".html", '');

    // let newUrl = urlAtual + pathnameUrl;

    // fazer uma condição

    if(newUrl === 'url.html') {
        return window.location.href = newUrl;
    } 
}





console.log(urlAmigavel());

// console.log(urlAmigavel('lojaonline.html'));




// console.log(urlAtual + pathnameUrl);


