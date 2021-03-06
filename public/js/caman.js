// alert('CAMAN')
let oldrotateval = 0;
image1.onload = function() { Apply() }
function Apply() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("image1");
		let w = getImgW(canvas,img);
		let h = getImgH(canvas,img);
		ctx.drawImage(img, 0, 0, w, h);
		canvas.removeAttribute('data-caman-id')
			contrastval = document.getElementById('contrastInput').value
			vibranceval = document.getElementById('vibranceInput').value
			brightnessval = document.getElementById('brightInput').value
			invertval = document.getElementById('invertInput').value
			hueval = document.getElementById('hueInput').value
			noiseval = document.getElementById('noiseInput').value
			tintval = document.getElementById('tintInput').value;
			tintOpacityval = document.getElementById('tintOpacityInput').value
			greyscaleval = document.getElementById('greyscaleInput').value
			rotateval = document.getElementById('rotateInput').value
			//val = document.getElementById('').value
	////////////////////////////////////////////////
	Caman("#myCanvas", function () {
		ctx.clearRect(0, 0, w, h);
		if(invertval == 1)
			this.invert()
		this.vibrance(vibranceval)
		this.brightness(brightnessval)
		this.contrast(parseInt(contrastval))
		this.hue(hueval)
		this.noise(noiseval)
		// this.rotate(90);
		if(greyscaleval == 1)
			this.greyscale()
		this.newLayer(function() {
    		this.setBlendingMode("overlay");
    		this.opacity(tintOpacityval);
    		this.fillColor(tintval);
		});
		this.render(function () {
			// this.save($.get("/fileupload"))
			console.log("Changes Saved")
		});
	});
	    ctx.clearRect(0,0,w,h);
	    ctx.save();
	    ctx.translate(w/2,h/2);
	    ctx.rotate(rotateval*Math.PI/180);
	    if(oldrotateval == rotateval) {
	    	ctx.drawImage(img,-w/2,-h/2,w,h);
	    	origOrien = false;
	    }
	    else {
	    	ctx.drawImage(img,-h/2,-w/2,h,w);	
	    	origOrien = true;
	    }
	oldrotateval = rotateval
};
	function getImgH(canvas,img) {
		canvas.height = img.height
		return(img.height)
	}
	function getImgW(canvas,img) {
		canvas.width = img.width
		return(img.width)
	}
//////////////////////////////////////////////////////
function Save() {
	Caman("#myCanvas", function () {
      	this.render(function() {
      		this.save(/*'./editedImage.png'*/);
		});
    });
}
