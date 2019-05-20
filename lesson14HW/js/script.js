$(document).ready(function() {


  function showModal(selector) {
    $(selector).on('click', function() {
      $('.overlay').animate(
        {
          opacity: 'show'
        }, 1000
      );
      $('.modal').slideDown('slow');
    });
  }
  function hideModal(selector) {
    $(selector).on('click', function() {
      $('.overlay').animate(
        {
          opacity: 'hide'
        }, 1000
      );
      $('.modal').slideUp('slow');
    });
  }
  
  showModal('.main_btn');
  showModal('.main_btna');
  showModal('a:contains("расписания туров")');

  hideModal('.close');
  
});