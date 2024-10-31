(function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})();

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#scrollable'
});

$(window).on('hashchange', function(e){
  history.replaceState ("", document.title, e.originalEvent.oldURL);
});
