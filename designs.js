var height, width, color ;

// Call makeGrid as the user submits the size
$('#sizePicker').submit( function ( event ) {
		event.preventDefault();
		height = $('#inputHeight').val();
		width = $('#inputWeight').val();
		makeGrid ( height, width );
});

function makeGrid ( x , y ) {
	
	// Remove already existing rows, if any
	$('tr').remove();
	
	// Create the grid
	for ( var i = 1 ; i <= x ; i++ ) {
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>'); // Adding row
		for ( var j = 1 ; j <= y ; j++ ) {
			$( '#table' + i ).append('<td></td>'); // Adding column
		}
	}
	
	// Add color to cell
	$('td').click( function addColor () {
		color = $('#colorPicker').val();
		
		// If cell is already colored, remove it else fill the new color
		if ( $(this).attr('style')) {
			$(this).removeAttr('style');
		} 
		else {
			$(this).attr('style', 'background-color:' + color );
		}
	});
}