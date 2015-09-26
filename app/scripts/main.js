'use strict';

(function ($) {
  $(document).ready(function(){
    var list = $('.selectify');
    list.selectify({
      listSelector: 'ul.selectify__list',
      item: 'selectify__option',
      other: '.selectify__other'
    });
    $("[name='dropdown-switcher']").bootstrapSwitch({
      onSwitchChange: function(event, state) {
        state ? list.trigger('show.dropdown') : list.trigger('hide.dropdown');
      }
    });
    $("[name='list-switcher']").bootstrapSwitch({
      onSwitchChange: function(event, state) {
        state ? list.trigger('show.list') : list.trigger('hide.list');
      }
    });
    $('.trigger').on('click', function(){
      var button = $(this).data();
      switch (button.action) {
        case 'show.dropdown':
          list.trigger('show.dropdown');
          break;
        case 'hide.list':
          list.trigger('hide.list');
          break;
        case 'show.list':
          list.trigger('show.list');
          break;
        case 'hide.dropdown':
          list.trigger('hide.dropdown');
          break;
        default :
          break;
      }
    });
  });
})(jQuery);
