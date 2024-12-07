//selecting popupbox popupoverlay button
var popupoverlay = document.querySelector('.popup-overlay');
var popupbox = document.querySelector('.popup-box');
var addpopupbutton = document.querySelector('.add-button');

addpopupbutton.addEventListener('click', function(){
    popupoverlay.style.display = 'block';
    popupbox.style.display = 'block';
})

//select cancel button
var cancelpopup=document.getElementById('cancel-popup');
cancelpopup.addEventListener('click', function(event){
    event.preventDefault();
    popupoverlay.style.display = 'none';
    popupbox.style.display = 'none';

});

//select container ,addbook button ,book title,book author,textarea
var container = document.querySelector('.container');
var addbook = document.getElementById('add-book');
var booktitle = document.getElementById('book-title-input');
var bookauthor = document.getElementById('book-author-input');
var bookreview = document.getElementById('book-review-input');

addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","Book-container");
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookreview.value}</p>
    <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);
    popupoverlay.style.display = 'none';
    popupbox.style.display = 'none';
})

function deletebook(event){
    event.target.parentElement.remove();

}