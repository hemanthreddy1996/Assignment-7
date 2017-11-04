
  $(function() {
      $('.draggable').draggable({ revert: true });
      $('.droppable').droppable({
         hoverClass: 'active',
         drop: function(e, ui) {
            $( this );
            var r = confirm("Do you want to delete?");
    if (r == true) {
        ui.draggable.hide().html();
    }
         }
      });
   });
