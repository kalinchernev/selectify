(function ($) {
  $(document).ready(function(){
    var dropdown = new Transformer(".transform");

    // adding the dropdown alternative of the list
    dropdown.attachSelect();

    // showing the dropdown
    dropdown.showSelect();

    // hide the dropdown
    //dropdown.hideSelect();

    // hide the list
    //dropdown.hideList();

    // show the list
    dropdown.showList();

  });
})(jQuery);