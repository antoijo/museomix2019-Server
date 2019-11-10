

window.onload = function WindowLoad(event) {
    //document.getElementById("container").innerHTML+= "new content";

}

/**
 * WEB SOCKETS
 * 
 */

console.log("connection to server...");

var socket = io.connect('http://192.168.81.11/');
    socket.on('display', function (data) {
      var intValue = parseInt(data);
      circle.set(intValue/100);
      circle.setText(data + " %");
    //   bar.set(-intValue/100);
      
      if (intValue < 20){
          if (lastBackground != 5)
            changeBackground(5);
      }else if (intValue <40){
        if (lastBackground != 4)
            changeBackground(4);
      }else if (intValue < 60){
        if (lastBackground != 3)
            changeBackground(3);
      }else if (intValue < 80){
        if (lastBackground != 2)
            changeBackground(2);
      } else {
        if (lastBackground != 1)
            changeBackground(1);
      }
    });