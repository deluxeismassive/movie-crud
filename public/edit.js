$(document).ready(() => {

  var url = window.location.pathname.split('/')
  var path = parseInt(url[2])
  console.log(path);

  $.get('/movies/' + path)
  .then((data) => {
    console.log(data);
    $('#eName').val(data.name)
    $('#eDirector').val(data.director)
    $('#eYear').val(data.year)
    $('#eRating').val(data.rating)
    $('#eUrl').val(data.poster)
    $('#poster').attr('src', data.poster)
  })

  $('.eForm').on('submit', (e) => {
    e.preventDefault()
    var obj = {
      name: $('#eName').val(),
      director: $('#eDirector').val(),
      year: $('#eYear').val(),
      rating: $('#eRating').val(),
      poster: $('#eUrl').val()
    }
    console.log(obj);
    $.ajax({
      url: '/movies/' + path,
      data: obj,
      method: 'PUT'
    })
    .done(() => {
      console.log('Yippee!!!!!!!');
    })
  })

})
