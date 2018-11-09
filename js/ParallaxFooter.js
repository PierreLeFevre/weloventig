// Parallax on mouse movement

$(".wrapper").mouseenter(function(e) {
  $(".parallax-container-inner").removeClass("floating");
});

$(".wrapper").mousemove(function(e) {
  parallaxIt(e, ".parallax-container__layer1", -100);
  parallaxIt(e, ".parallax-container__layer2", -50);
  parallaxIt(e, ".parallax-container__layer3", -30);
});

function parallaxIt(e, target, movement) {
  var $this = $(".wrapper");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 3) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

// Parallax animation

function parallaxItLoop(width, height, target, movement) {
  var $this = $(".wrapper");
  var relX = width;
  var relY = height;
  TweenMax.to(target, 7, {
    x: (relX - $this.width() / 3) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement,
	yoyo: true,
	ease: Power2.easeInOut,
	useFrames: false,
	force3D: true
  });
}

var parallaxOne = function()
{
	parallaxItLoop(300, 300, ".parallax-container__layer1", -200);
	parallaxItLoop(300, 300, ".parallax-container__layer2", -10);
	parallaxItLoop(300, 300, ".parallax-container__layer3", -60);

	setTimeout(function () {
	parallaxTwo();
	}, 5500);
}

var parallaxTwo = function()
{
	parallaxItLoop(700, 300, ".parallax-container__layer1", -200);
	parallaxItLoop(-2000, 300, ".parallax-container__layer2", -10);
	parallaxItLoop(800, 300, ".parallax-container__layer3", -60);

	setTimeout(function () {
		parallaxOne();
		}, 6500);

}


// var test = 1;

// function timeout() {
//     setTimeout(function () {
// 		timeout();

// 		if ( test === 1 ) {
// 			parallaxOne();
// 			test ++;
// 		} else if (test === 2) {
// 			parallaxTwo();
// 			test = 1;
// 		}
		// else if (test === 3) {
		// 	parallaxThree();
		// 	test ++;
		// } else if (test === 4) {
		// 	parallaxFour();
		// 	test = 1;
		// }
		// else if (test === 5) {
		// 	parallaxFive();
		// 	test = 1;
		// }


	//     }, 4500);
	// }

parallaxOne();

//timeout();