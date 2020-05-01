let itemWorksListBtn = document.querySelector('.works__list-zoom');
let itemWorksListLink = document.querySelector('.works__list-link');

itemWorksListBtn.on('focus', function(event) {
  var target = event.target;

  if (this.classList.contains('active')) {
    this.classList.add('.works__list-item--active')
  }

})
