// alert('CAMAN')
image1.onload = function() { Apply() }
function Apply() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("image1");
		let w = getImgW(canvas,img);
		let h = getImgH(canvas,img);
		ctx.drawImage(img, 0, 0, w, h);
		canvas.removeAttribute('data-caman-id')
	////////////////////////////////////////////////
	Caman("#myCanvas", function () {
		ctx.clearRect(0, 0, w, h);
		contrastval = document.getElementById('contrastInput').value
		vibranceval = document.getElementById('vibranceInput').value
		brightnessval = document.getElementById('brightInput').value
		invertval = document.getElementById('invertInput').value
		hueval = document.getElementById('hueInput').value
		noiseval = document.getElementById('noiseInput').value
		tintval = document.getElementById('tintInput').value;
		tintOpacityval = document.getElementById('tintOpacityInput').value
		//val = document.getElementById('').value
		if(invertval == 1)
			this.invert()
		this.vibrance(vibranceval)
		this.brightness(brightnessval)
		this.contrast(parseInt(contrastval))
		this.hue(hueval)
		this.noise(noiseval)
		this.newLayer(function() {
    		this.setBlendingMode("overlay");
    		this.opacity(tintOpacityval);
    		this.fillColor(tintval);
		});
		// this.rotate(90);
		this.render(function () {
			console.log("Changes Saved")
		});
	});
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
