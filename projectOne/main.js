document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header-top-nav').classList.toggle('open');
})
document.querySelector('.burger-bottom').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header-bottom-nav').classList.toggle('open');
})