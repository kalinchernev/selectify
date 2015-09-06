function Transformer(selector){
  this.selector = selector;

  this.hideList = function(){
    $(this.selector).find('ul').hide();
  };
  this.showList = function(){
    $(this.selector).find('ul').show();
  };
  this.hideSelect = function(){
    $(this.selector).find("select").hide();
  };
  this.showSelect = function(){
    $(this.selector).find("select").show();
  };
  this.attachSelect = function(){
    var selector = this.selector,
      $list  = $(selector).find('ul'),
      listClass = $list.attr('class');

    $list.each(function() {
      var $select = $('<select />').addClass(listClass);

      $(this).find('a').each(function() {
        var $option = $('<option />');
        $option.attr('value', $(this).attr('href')).html($(this).html());
        $select.append($option);
      });

      if (!$list.parent().find('select').length) {
        $list.parent().append($select);
        $(selector).find("select").hide();
        $select.on({
          change: function(event) {
            var optionHref = $(this).val(),
              $item = $list.find('li'),
              $location = $item.children('a[href="' + optionHref + '"]');

            // $location.click(); // ajax-friendly
            window.location.href = $location.attr('href');
          }
        });
      }
    });
  };
}
