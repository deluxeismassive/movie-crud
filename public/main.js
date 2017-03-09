$(document).ready(function() {

  $.get('/movies')
  .then(function(data) {
    for (let i = 0; i < data.length; i++) {
      var tag = parseInt(data[i].id)
      $('#movieTable').append($('<tr>', {id:'movie' + tag}))
      $('#movie' + tag).append($(`<a href="/show/${tag}">`))
      $('a').last().append($('<td>', {id:'iName' + tag, class: 'tableData'}).text(data[i].name))
      $('#movie' + tag).append($('<td>', {id:'iYear' + tag, class: 'tableData'}).text(data[i].year))
      $('#movie' + tag).append($('<td>', {id:'iDirector' + tag, class: 'tableData'}).text(data[i].director))
      $('#movie' + tag).append($('<button>', {id:'edit' + tag, class: 'editButton'}).text('Edit'))
      $('#movie' + tag).append($('<button>', {id:'delete' + tag, class: 'deleteButton'}).text('Delete'))
    }
    $(document.body).append($('<button>', {id:'new', class: 'newButton'}).text('New'))
  })

  $(document).on('click', '.editButton', function() {
    var clicked = $(this).attr('id').slice(4)
    window.location = '/edit/' + clicked
  })

  $(document).on('click', '.newButton', function() {
    window.location = '/new'
  })

  $(document).on('click', '.deleteButton', function() {
    var clicked = $(this).attr('id').slice(6)
    $.ajax({
      url: '/movies/' + clicked,
      method: 'DELETE',
      success: (response) => {
        console.log('yay');
        window.location.reload()
      }
    })
  })
})
