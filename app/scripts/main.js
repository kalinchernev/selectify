'use strict';

(function ($) {
  $(document).ready(function () {
    var list = $('.selectify');
    list.selectify({
      listSelector: 'ul.selectify__list',
      item: '.selectify__option'
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
  });
})(jQuery);
