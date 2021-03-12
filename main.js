$('.filter-toggle').on('click', function() {
    if($('.filters').is(':visible')) {
      $('.filter-toggle').text('Show Filters');
      $('.filters').slideUp(500);
    } else {
      $('.filter-toggle').text('Hide Filters');    
      $('.filters').slideDown(500);
    }  
    return false;
  })
  
  $('.filters a').on('click', function() {
    let filtered = $(this).attr('data-filter');
    console.log(this);
    console.log(filtered);
    $('.products-main .product').hide()
    $(filtered).show()
    return false;
  })
  
  $('.nav-toggle').on('click', function() {
    return false;
  })
  
  $('.nav-toggle').on('click', function() {
    $('.sm-nav').slideDown(500);
  })
  
  $('.sm-nav a').on('click', function() {
    $('.sm-nav').hide();  
  })
  
  $('.close-menu').on('click', function() {
    $('.sm-nav').slideUp(500);
  })