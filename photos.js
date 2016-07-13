function handlePhotoClick(e) {
  $(this).fadeOut();
}

function setUp() {
  $('.photo').click(handlePhotoClick);
}

$(document).ready(setUp);
