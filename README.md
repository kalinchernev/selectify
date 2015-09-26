# Selectify

Any list can be converted to a select. 
Especially useful when saving space and transforming elements for mobile.

## Instantiation

```javascript
var list = $('.selectify');
list.selectify({
  listSelector: 'ul.selectify__list',
  item: '.selectify__option'
});
```

Where:
* `.selectify` - class of 'wrapper' which holds the list
* `selectify.listSelector` - list element to be transformed, hidden/shown
* `selectify.item` - item element nested under the list element, holds values for dropdown

## Usage

Event triggers:
* `list.trigger('show.dropdown')`
* `list.trigger('hide.dropdown')` 
* `list.trigger('show.list')`
* `list.trigger('hide.list')`

## Demo

[Link to try the idea](https://selectify.herokuapp.com/)