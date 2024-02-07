let allPhotos =["media/2.jpg","media/3.jpg","media/4.jpg","media/5.jpg","media/6.jpg","media/7.jpg","media/8.jpg","media/11.jpg","media/0.jpg",];

let photos = document.querySelector('.photos');
let photo = photos.querySelector('#img')
let back = document.querySelector('.back');
let next = document.querySelector('.next');
// console.log(photo.src='media/4.jpg')

let count = 0;
next.addEventListener('click',function(){
  count++;
  if (count >= allPhotos.length){
    count=0;
    photo.src = allPhotos[count];
  }else{
    photo.src = allPhotos[count];
  }
  
})
  
back.addEventListener('click',function(){
  count--;
  if (count <= 0){
    count=allPhotos.length-1;
    photo.src = allPhotos[count];
  }else{
    photo.src = allPhotos[count];
  }
  


})
