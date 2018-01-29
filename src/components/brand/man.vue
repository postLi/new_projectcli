<template>
	<div class="box">
		<ul class="categroy" v-if='categroy.length>0'>
			<li v-for="item in categroy">
				<router-link to="goods">{{item}}</router-link>
			</li>
		</ul>
		<ul class="zm" v-if='categroy.length>0'>
			<li  v-for="item in zm"  @click="$router.push({name:'recommend'})">
				<a href="#">{{item}}</a>
				<span></span>
			</li>
		</ul>
	</div>
</template>
<script>
	import './comme.scss'
	export default{
		data(){
			return {
				categroy:['FDJLJGL','SUBGO','JFDLSJFLJFIEJ','EKDFKKFK','AALFJFRJ','GOOSE','FDFSKFIKTK','FDKFDF','TIFIWJ'],
				zm:['AJFL','BFF','CFE','DFS','ESFD','FDF','GGG','HH','IS','JFS','KSA','LSFD','MFS','NS','OSA','PFF','QFSSA','RSAA','SFF','TSAF','UDSA','VAD','WADF','SAD','YDFSAWE','ZFBASF']
			}
		}
	}
</script>