$(document).ready(function () {
    $("form").submit(function (event) {
      let formData = {
        input: $("#input").val()
      };
  
      $.ajax({
        type: "POST",
        url: "http://localhost:8080/list/",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
      listAll();
    });
  });
  