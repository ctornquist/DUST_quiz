$(document).ready(function() {
    $('input[type="radio"]').click(function() {
        $this = $(this);
        $label = $this.parent();
        // first make ALL labels normal
        $label.parent().parent().find('label').css('box-shadow', '0px 0px');
        $label.parent().parent().find('label').css('opacity', '0.5');
        // then update just the clicked one
        $label.css('box-shadow', '-3px -3px 10px black');
        $label.css('opacity', '1');
    });
});
