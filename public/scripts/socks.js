var user;
if()
  var socket = io();
      $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      });
      socket.on('chat message', function(msg){
          $('body').append($('<div id = "messages">').text(  msg));
      });
