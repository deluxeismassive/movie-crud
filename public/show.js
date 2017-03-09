$(document).ready(() => {

  var url = window.location.pathname.split('/')
  var path = url[2]


  $.get('/movies/' + path )
  .then((data) => {
    console.log(data);
    $('#eName').val(data.name)
    $('#eDirector').val(data.director)
    $('#eYear').val(data.year)
    $('#eRating').val(data.rating)
    $('#eUrl').val(data.poster)
    $('#poster').attr('src', data.poster)
  })
})
