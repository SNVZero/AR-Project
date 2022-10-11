sceneEl.addEventListener("markerFound", (e)=>{
	isMarkerVisable=true;
});

sceneEl.addEventListener("markerLost", (e)=>{
	isMarkerVisable=false;
});

hendlerRotation (event) {

	if(isMarkerVisable){
		el.object3D.rotation.y = event.detail.positionChange.x*rotationFactor;

		el.object3D.rotation.x +=event.detail.positionChange.y * rotationFactor;
	}

}


handleScale :function (event ) {
	if (isMarkerVisible) {
	  this.scaleFactor *=1 + event.detail.spreadChange / event.detail.startSpread;

	  this.scaleFactor = Math.min(Math.max(this.scaleFactor, this.data.minScale),this.data.maxScale);

	  el.object3D.scale.x = scaleFactor * initialScale.x;
	  el.object3D.scale.y = scaleFactor * initialScale.y;
	  el.object3D.scale.z = scaleFactor * initialScale.z;
	}
 }