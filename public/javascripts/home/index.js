$(function() {
  var pageToFetch = 2;

  $(".more").click(function() {
    $(this).addClass("loading");
    $.get("/home/mock_set", {page: pageToFetch}, function(data) {
      $(".more").removeClass("loading");
      if (data.trim().length > 0) {
        $(data).insertBefore('.more');
      }
      if (pageToFetch === TOTAL_PAGES) {
        $(".more").hide();
      }
      pageToFetch++;
    });
  });

  $('#show_all_projects').click(function(evt) {
    evt.preventDefault();
    $('#all_projects').show();
    $('#show_all_projects').hide();
  });

  $('.project_filter').keyup(function() {
    var projects = $('.project_list li');
    var filter = $.trim($(this).val());
    projects.show();
    if (filter) {
      filter = new RegExp(filter ,'i');
      projects
        .filter(function() { return !filter.test($(this).text()); })
        .hide();
    }
  });
});
