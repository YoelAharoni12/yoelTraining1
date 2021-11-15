$(' .ui .menu')
    .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
        delay: {
            show: 300
        }
    });
$('.ui.dropdown')
    .dropdown({ on: 'hover' })
;
$('.ui.selection.dropdown')
    .dropdown()
;

