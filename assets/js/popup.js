var groups = {};
$('.galleryItem').each(function() {
  var id = parseInt($(this).attr('data-group'), 10);

  console.log(id, 'i am id');
  if (!groups[id]) {
    groups[id] = [];
  }

  groups[id].push(this);
});

$.each(groups, function() {
  $(this).magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    gallery: { enabled: true },
  });
});
