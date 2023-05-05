$(document).ready(OnReady);

function OnReady() {
    console.log( 'We are ready to rock!' );

    // registering event handlers to run functions when specified elements are clicked
    // specified elements are those with ID of color-btn
    $( '#red-btn' ).on( 'click', appendRedContainer );
    $( '#blue-btn' ).on( 'click', appendBlueContainer);
    $( '#green-btn' ).on( 'click', appendGreenContainer);
    $( '#yellow-btn' ).on( 'click', appendYellowContainer);

    // registering event handler to run function when specified elements are clicked
    // targets element with ID allBlocks, on click of an element in the class .block
    // inside the parent element allBlocks, run the function removeBlock
    $('#allBlocks').on('click', '.block', removeBlock);

}

// Creating variables to increment for the counters
let redCount = 1
let blueCount = 1
let greenCount = 1
let yellowCount = 1

// function that is run when the red button is clicked
function appendRedContainer() {
    // targeting element with ID allBlocks (container for color blocks created)
    // appending the element with a copy of the code for the red block on screen by default
    $( '#allBlocks' ).append( '<div class="block red-fill"></div>' );
    // emptying out element with ID value of red-count each click inside the function, otherwise results will concatenate with each click
    $('#red-count').empty()
    // incrementing value of variable redCount with each button click
    redCount++
    // appending value of element with ID red-count with the value of the variable redCount
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
    $('#green-count').empty()
    greenCount++
    $('#green-count').append(greenCount)
}

function appendYellowContainer() {
    $( '#allBlocks' ).append( '<div class="block yellow-fill"></div>' );
    $('#yellow-count').empty()
    yellowCount++
    $('#yellow-count').append(yellowCount)
}

// function that is run when an element with the class .block in the parent element with ID
// allBlocks is clicked
function removeBlock() {
    // remove the block that is clicked (this)
    $( this ).remove();
}





console.log('🟥 🟦 🟩 🟨');