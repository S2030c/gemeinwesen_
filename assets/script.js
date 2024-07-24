function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
/*
  Slidemenu
*/
ready(function () {
	var $body = document.body;
	var $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

});
