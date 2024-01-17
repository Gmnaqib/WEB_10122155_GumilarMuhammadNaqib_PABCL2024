var jumbotron = document.getElementById('jumbotron');
var images = jumbotron.getElementsByTagName('img');
var index = 0;

function slideShow() {
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }

    index++;

    if (index >= images.length) {
        index = 0;
    }

    images[index].classList.add('active');
    setTimeout(slideShow, 4000);
}

slideShow();
