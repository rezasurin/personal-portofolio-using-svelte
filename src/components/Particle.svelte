
<div id="particle-container">
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
  <div class="shape"></div>
</div>

<style lang="scss">
  $gradient-color: linear-gradient(64.00916346799386deg, rgba(243, 72, 104,1) 23.44140625%,rgba(242, 71, 104,1) 23.44140625%,rgba(158, 0, 236,1) 79.84765625%);
  $white: #f5f5f5;
.particle {
	position: absolute;
 	border-radius: 50%;
   width: 200px;
   height: 200px;
   top: 200px;
}

@for $i from 1 through 30 {
	@keyframes particle-animation-#{$i} {
		100% {
			transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		}
	}
	
	.particle:nth-child(#{$i}){
		animation: particle-animation-#{$i} 60s infinite;
		$size: random(5) + 35 + px;
		opacity: random(100)/100;
		height: $size;
		width: $size;
		animation-delay: -$i * .1s;
		transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		background: hsl(random(360), 70%, 50%);
	}
}

.wrap {
  position: absolute;
}
.shape {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 200px;
  height: 400px;
  background: $gradient-color;
  animation: wave 4.0s ease-in-out infinite;
  

  // &:nth-of-type(2) {
  // width: 200px;
  // height: 800px;
  //   position: absolute;
  //   top: -200px;
  //   left: -400px;
  //   opacity: .1;
  //   z-index: -1;
  // }
  // &:nth-of-type(3) {
  // width: 300px;
  // height: 300px;
  //   position: absolute;
  //   bottom: -30px;
  //   right: 0;
  //   opacity: .1;
  //   z-index: -1;
  // }
}
@keyframes wave {
  
  0%, 100% {
    border-radius: 70% 10% 72% 58% / 27% 12% 100% 73%;
    
    // margin: 20px 10px 2px 15px / 2px 4px 16px 20px;
  }
  50% {
    border-radius: 77% 103% 54% 46% / 40% 38% 62% 60%;
    box-shadow: -2px -10px 0 0 $white;
  }
}
</style>