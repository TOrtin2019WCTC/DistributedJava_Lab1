$(document).ready(function(){
'use strict';

$('#newsletter').on('submit', function(e){
    e.preventDefault();
    $('#confirmation').show();
   $('#form1').hide();
  
})
});