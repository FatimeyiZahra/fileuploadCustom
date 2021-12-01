var deleteSelected = $('.delete-selected')
var fileManagerItem = $('.file-manager-item')
var cardUploadFile = $(".upload-file");

if (fileManagerItem.length) {
  fileManagerItem.find('.form-check-input').on('change', function () {
    if (fileManagerItem.find('.form-check-input:checked').length) {
      deleteSelected.addClass('show');
      console.log("ASda")
    } else {
      deleteSelected.removeClass('show');
      console.log("AadadSda")
    }
  });
}

$(".file-upload-btn").click(function () {
  if (cardUploadFile.hasClass("show")) {
    cardUploadFile.removeClass("show");
  } else {
    cardUploadFile.addClass("show");
  }
});

$(".cancel-btn").click(function () {
  if (cardUploadFile.hasClass("show")) {
    cardUploadFile.removeClass("show");
  }
});

$(".calcel-btn").click(function(){
  location.reload();
})


