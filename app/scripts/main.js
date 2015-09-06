(function ($) {
  $(document).ready(function(){
    var dropdown = new Transformer(".transform");
    $('.trigger').on('click', function(){
      var button = $(this).data();
      switch (button.action) {
        case 'attach':
          dropdown.attachSelect();
          break;
        case 'detach':
          dropdown.detachSelect();
          break;
        case 'hide-list':
          dropdown.hideList();
          break;
        case 'show-list':
          dropdown.showList();
          break;
        case 'show-select':
          dropdown.showSelect();
          break;
        case 'hide-select':
          dropdown.hideSelect();
          break;
        default :
          break;
      }
    });
  });
})(jQuery);