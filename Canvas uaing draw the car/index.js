window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var carImg = new Image();
    carImg.src = 'download.png'; 

    var carX = 0;
    var carY = canvas.height / 2;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(carImg, carX, carY);
        carX += 2;
        if (carX > canvas.width) {
            carX = -carImg.width;
        }
        requestAnimationFrame(draw);
    }
    draw();
};
