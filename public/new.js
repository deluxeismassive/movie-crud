$(document).ready(() => {

  $('.eFormNew').on('submit', (e) => {
    e.preventDefault()
    var obj = {
      id: Date.now(),
      name: $('#eName').val(),
      director: $('#eDirector').val(),
      year: $('#eYear').val(),
      rating: $('#eRating').val(),
      poster: $('#eUrl').val()
    }
    console.log(obj);
    $.ajax({
      url: '/movies',
      data: obj,
      method: 'POST'
    })
    .done(() => {
      console.log('Yippee!!!!!!!NEW');
    })
  })
})
