'use strict';

(function ($) {
  $.fn.selectify = function(options) {
    this.each(function() {
      var settings = $.extend({
        listWrapper: $(this),
        listSelector: 'ul',
        item: 'li',
        other: '.item__other'
      }, options);
      var attachDropDown = function() {
        var $list = $(settings.listSelector),
            listClass = $list.attr('class');

        $list.each(function() {
          var $select = $('<select />').addClass(listClass);

          $(this).find('li').each(function() {
            var currentClass = $(this).attr('class'), $option;

            switch (currentClass) {
              case 'lang-select-page__option is-selected':
                $option = $('<option />');
                $option.html($(this).html()).attr('selected', true);
                $select.append($option);
                break;

              case 'lang-select-page__option lang-select-page__other':
                $option = $('<option />');
                $option.attr('value', $(this).find('a').attr('href')).html($(this).html());
                $select.append($option);
                break;
            }
          });

          if (!$list.parent().find('select').length) {
            $list.parent().append($select);
            settings.listWrapper.find('select').hide();
            $select.on({
              change: function() {
                var optionHref = $(this).val(),
                  $item = $list.find('li'),
                  $location = $item.children('a[href="' + optionHref + '"]');

                window.location.href = $location.attr('href');
              }
            });
          }
        });
      };
      var hideDropDown = function() {
        settings.listWrapper.find('select').hide();
      };
      var hideList = function() {
        settings.listWrapper
          .find(settings.listSelector)
          .find(settings.other)
          .hide();
        settings.listWrapper
          .find(settings.listSelector)
          .find(settings.selected)
          .hide();
      };
      var showDropDown = function() {
        settings.listWrapper.find('select').show();
      };
      var showList = function() {
        $(settings.listWrapper)
          .find(settings.listSelector)
          .find(settings.other)
          .show();
        $(settings.listWrapper)
          .find(settings.listSelector)
          .find(settings.selected)
          .show();
      };

      settings.listWrapper.on('hide.dropdown', hideDropDown);
      settings.listWrapper.on('hide.list', hideList);
      settings.listWrapper.on('show.dropdown', showDropDown);
      settings.listWrapper.on('show.list', showList);
      attachDropDown();
    });
  };

})(jQuery);
