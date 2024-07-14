// $(document).on("mousemove", function (e) {
//     var cursor = $(".cursor");
//     cursor.attr(
//       "style",
//       "top:" + (e.pageY - 15) + "px; left:" + (e.pageX - 15) + "px;"
//     );
//   });
  

$(document).mousemove(function(e) {
    var cursor = $(".cursor");
    cursor.css({
        top: (e.pageY - 15) + "px",
        left: (e.pageX - 15) + "px"
    });
});
