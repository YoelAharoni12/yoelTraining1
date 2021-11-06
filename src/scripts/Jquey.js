console.log($('.menu .browse'));
$(' .menu .browse')
    .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
        delay: {
            show: 300
        }
    });

$('.ui.selection.dropdown')
    .dropdown()
;
