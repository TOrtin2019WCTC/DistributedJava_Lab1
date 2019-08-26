$(document).ready(function(){
'use strict';

var firstName;

$('#newsletter').on('submit', function(e){
    e.preventDefault();

    firstName = $('#fName').val();
    $('#confirmation').html('Success, ' + firstName + '!' + ' Your info has been saved.<br><br>' +
        'When a new Legend becomes playing in Apex Legends, you will receive an email detailing their abilities.');
    $('#confirmation').show();
   $('#form1').hide();

})
});