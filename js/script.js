console.log('JS OK');

const imagesNames = ['01', '02', '03', '04', '05'];
const gallery = document.getElementById('imgPlacer');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
let imgIndex = 0;

for (let i = 0; i < imagesNames.length; i++){
    gallery.innerHTML += `<img src="img/${imagesNames[i]}.webp"></img>`;
    console.log('added image');
};

const images = document.querySelectorAll('img');
console.log(images)

images[0].classList.add('active')

next.addEventListener('click', function(){
    images[imgIndex].classList.remove('active')
    imgIndex++;
    console.log(imgIndex)
    images[imgIndex].classList.add('active')
});

previous.addEventListener('click', function(){
    images[imgIndex].classList.remove('active')
    imgIndex--;
    console.log(imgIndex)
    images[imgIndex].classList.add('active')
});



