<template>
  <!-- https://dribbble.com/shots/3376812-Abstract-Activity-Indicator -->
  <div class="indicator" :class="{ active: coIsActive }">
    <svg width="16px" height="12px">
      <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
      <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
    </svg>
  </div>

</template>

<script>
export default {
	props: {
		isActive: {
			type: Boolean,
			default: true
		},
  },
	data() {
		return {

		}
	},
	computed: {
		coIsActive() {
			return this.isActive
		}
	},
	mounted() {
	}
}
</script>


<style lang='scss' scoped>
.indicator {
  position: absolute;
  top: 78%;
  left: 75%;
  transform: translate(-50%, -50%) scale(3);

	&.active {
		top: 32%;
	}
}
 .indicator svg polyline {
	 fill: none;
	 stroke-width: 2;
	 stroke-linecap: round;
	 stroke-linejoin: round;
}
 .indicator svg polyline#back {
	 stroke: rgba(59,211,171,0.3);
}
 .indicator svg polyline#front {
	 stroke: #3bd3ab;
	 stroke-dasharray: 12, 36;
	 stroke-dashoffset: 48;
	 animation: dash 1s linear infinite;
}
 .cta {
	 position: fixed;
	 bottom: 20px;
	 right: 30px;
	 color: #222;
	 font-weight: bold;
}
 @-moz-keyframes dash {
	 62.5% {
		 opacity: 0;
	}
	 to {
		 stroke-dashoffset: 0;
	}
}
 @-webkit-keyframes dash {
	 62.5% {
		 opacity: 0;
	}
	 to {
		 stroke-dashoffset: 0;
	}
}
 @-o-keyframes dash {
	 62.5% {
		 opacity: 0;
	}
	 to {
		 stroke-dashoffset: 0;
	}
}
 @keyframes dash {
	 62.5% {
		 opacity: 0;
	}
	 to {
		 stroke-dashoffset: 0;
	}
}

</style>