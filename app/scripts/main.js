'use strict';

(function ($) {
  $(document).ready(function(){
    var list = $('.selectify');
    list.selectify({
      listSelector: 'ul.selectify__list',
      item: 'selectify__option',
      other: '.selectify__other'
    });

    $('.trigger').on('click', function(){
      var button = $(this).data();
      switch (button.action) {
        case 'hide-list':
          button.trigger('show.dropdown');
          break;
        default :
          break;
      }
    });
  });
})(jQuery);
