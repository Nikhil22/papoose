function pipe() {

  var fns = arguments;

  return function() {

    var result = fns[0].apply(this, arguments);
    for (var i = 1; i < fns.length; i++) {
      result = fns[i](result);
    }

    return result;
  };
  
}
