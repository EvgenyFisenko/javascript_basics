"use strict";

// 3.Сделайте модальное (появляющееся и исчезающее) окно ...

const modalBtn = document.querySelector('.btn-modal');
const modalDiv = document.querySelector('.modal');
const modalCloseSpan = document.querySelector('.close');

modalBtn.addEventListener('click', function () {
    modalDiv.classList.add('visible');
    modalDiv.classList.remove('bounceOutDown');

});

modalCloseSpan.addEventListener('click', function () {
    modalDiv.classList.add('bounceOutDown');
    setTimeout(function () {
        modalDiv.classList.remove('visible');
    }, 800);
});


// 4. Сделайте несколько карточек товара, примерно такого вида...

const fourthDiv = document.querySelector('.fourth');
const productButtons = fourthDiv.querySelectorAll('button');
const productDetail = `
    <div class="product-detail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium assumenda, consequuntur
        dicta error esse expedita in ipsa ipsum molestiae natus officiis ?
     </div>
`;

productButtons.forEach(function (productBtn) {
    productBtn.addEventListener("click", function () {
        if (productBtn.innerHTML === 'Подробнее') {
            productBtn.parentNode.querySelector('img').style.display = 'none';
            productBtn.parentNode.querySelector('.productName').insertAdjacentHTML("afterend", productDetail);
            productBtn.innerHTML = 'Отмена';
        } else {
            productBtn.parentNode.removeChild(productBtn.parentNode.querySelector('.product-detail'));
            productBtn.parentNode.querySelector('img').style.display = 'block';
            productBtn.innerHTML = 'Подробнее';
        }
    });
});
