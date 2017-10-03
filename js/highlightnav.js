var path = window.location.pathname;
path = path.substring(1);
$('.navbar-right a[href="' + path + '"]').parent().addClass('active');

