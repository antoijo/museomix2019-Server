

window.onload = function WindowLoad(event) {
    //document.getElementById("container").innerHTML+= "new content";

}


/**
 * 
 * BUTTONS
 */

$(":button").on({
  mousedown: function() {
      $(this).data('timer', setTimeout(function() {
            foo();
      }, 3000));
  },
  mouseup: function() {
      clearTimeout( $(this).data('timer') );
  }
});

function foo() {
  alert('Yaay !')
}

/**
 * WEB SOCKETS
 * 
 */

console.log("connection to server...");

// var socket = io.connect('http://192.168.81.11/');
//     socket.on('display', function (data) {
//       var intValue = parseInt(data);
//       circle.set(intValue/100);
//       circle.setText(data + " %");
    
//     });