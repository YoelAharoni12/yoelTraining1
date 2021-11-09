console.log($('.ui .menu'))
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

// $('.ui.card').css("background-color","rgba(250,250,50,0.8)").dimmer({on:'hover'});
