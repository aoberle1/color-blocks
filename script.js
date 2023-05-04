$(document).ready(OnReady);

function OnReady() {
    console.log( 'We are ready to rock!' );

    $( '#red-btn' ).on( 'click', appendRedContainer );
    $( '#blue-btn' ).on( 'click', appendBlueContainer);
    $( '#green-btn' ).on( 'click', appendGreenContainer);
    $( '#yellow-btn' ).on( 'click', appendYellowContainer);

    $('#allBlocks').on('click', '.block', removeBlock);

    
}
let redCount = 1
let blueCount = 1
let greenCount = 1
let yellowCount = 1

function appendRedContainer() {
    $( '#allBlocks' ).append( '<div class="block red-fill"></div>' );
    $('#red-count').empty()
    redCount++
    $('#red-count').append(redCount)
}

function appendBlueContainer() {
    $( '#allBlocks' ).append( '<div class="block blue-fill"></div>' );
    $('#blue-count').empty()
    blueCount++
    $('#blue-count').append(blueCount)
}

function appendGreenContainer( ) {
    $( '#allBlocks' ).append( '<div class="block green-fill"></div>' );
}

function appendYellowContainer() {
    $( '#allBlocks' ).append( '<div class="block yellow-fill"></div>' );
}

function removeBlock() {
    $( this ).remove();
}





console.log('🟥 🟦 🟩 🟨');