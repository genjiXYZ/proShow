<template>
	<div class="test">

  <svg class="menu__text" viewBox="0 0 110 20" preserveAspectRatio="xMinYMid meet">
                    <defs>
                        <filter id="goo-1">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="	1 0 0 0 0  
																			0 1 0 0 0  
																			0 0 1 0 0  
																			0 0 0 15 -8" result="goo"></feColorMatrix>
                            <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                        </filter>
                    </defs>
                    <g   style =" filter :url(#goo-1)" >
                        <text x="0" y="15">Cobain</text>
                        <text x="0" y="15">1994-4-5</text>
                    </g>
                </svg>

	</div>
</template>


<script>
export default {
	
}
</script>


<style lang="scss" scoped>


.test{
	width: 100vw;
	height: 100vh;
	background-color: peru;
}



</style>