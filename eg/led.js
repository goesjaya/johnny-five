var five = require("../lib/johnny-five.js"),
    board, led, repl;

board = new five.Board({
  debug: true
});

board.on("ready", function() {

  led = new five.Led({
    board: board,
    pin: 9
  });


  repl = new five.Repl({
    board: board,
    led: led
  });


  // led.strobe();

  led.fade();
});
