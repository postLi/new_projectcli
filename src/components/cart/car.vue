<template>
	<div class="car_order">
	 <myHead headMes="购物袋" goToBack="1" ></myHead>
		<main>

			<div class="order_tips">
				<a href="#">成为金牌会员，享受VIP专属会员，点击查看<span class="close">&times;</span></a>
			</div>
			<div class="order_content" @click="del($event)">
				<ul v-for="(item,index) in carlist" :id="item.id" @click="total($event,index,id)" class="ul">
					<li class="car_l">
						<input type="checkbox" class="checkbox">
					</li>
					<li class="car_c">
						<a href="#"><img :src="item.imgurl"></a>
					</li>
					<li class="car_r">
						<span class="close">&times;</span>
						<h3>{{item.brand}}<span>{{item.title}}</span></h3>
						<p><span>颜色：{{item.color}}</span><span>尺码：{{item.size}} 码</span></p>
						<p><span class="icon7">7</span>支持七天无理由退换</p>
						<div class="btn">
							<span class="price">￥{{item.price}}</span>
							<div class="b_r"  >
								<a href="#" @click="sub(index,id)">-</a>
								<span>{{item.qty}}</span>
								<a href="#" @click="add(index,id)">+</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</main>
		<ul class="c_footer">
			<li class="c_l">
				<input type="checkbox" @click="checkAll($event)"><a href="#">全选</a>
			</li>
			<li class="c_c">
				<p>总金额：<span>￥{{all.count}}</span></p>
			</li>
			<li class="c_r" @click="GotoOrder">
				<a href="#">结算(1)</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import './car.scss'
	import http from '../../utils/reqAjax.js'
	import myHead from '../head/head.vue';
    import myFoot from '../foot/foot.vue';
	export default{
		data:function(){
			return {
				carlist:[],
				news:[],
				id:this.$route.params.goodId,
				num:[],
				all:{
					qty:1,
					count:0
				},
				tts:''
			}
		},
        components: {
            
            myFoot:myFoot,
            myHead:myHead
        },
		mounted:function(){
			http.post({url:'carts',params:{'userid':window.sessionStorage.getItem('id')}}).then(res=>{
				console.log(res.data)
				this.carlist = res.data;
				console.log(this.carlist);
			})
		},
		methods:{
			GotoOrder:function(){
				sessionStorage.setItem('allmoney', this.all.count);
				// console.log(allmoney);        
				this.$router.push({ name:'order',params:{userid:window.sessionStorage.getItem('id'),goodsid:this.news}})
			},
			// choose:function(event){
			// 	if(){
			// 	}
			// 	if(checkbox == check){

			// 	}
			// },
			// Qty_btn:function(event,index,id){
			// 	// var goodId = this.carlist[index].id;
			// 	if(event.target.className === 'sub'){
			// 		event.target.nextElementSibling.value --
			// 		if(event.target.nextElementSibling.value <= 0){
			// 			event.target.nextElementSibling.value = 1;
			// 		}
			// 		// console.log(event.target.nextElementSibling.value);
			// 	}else if(event.target.className === 'add'){
			// 		event.target.previousElementSibling.value ++
			// 		// console.log(event.target.previousElementSibling.value);
			// 	}else if(event.target.className === 'checkbox'){
			// 		if(event.target.checked == true){

			// 			var price = this.carlist[index].price;
			// 			var qty = event.target.parentNode.parentNode
			// 			var qty = document.querySelector('.qty').value;
			// 			console.log(qty);
			// 			console.log(price);
			// 			// var total = p
			// 		}

			// 		console.log(event.target);
			// 		// console.log(goodId);
			// 	}
			// },
			sub:function(index,id){
				this.carlist[index].qty--;
				if(this.carlist[index].qty <= 1){
					this.carlist[index].qty = 1;
				}
				var qty = this.carlist[index].qty;
				var t = this.carlist[index].price* qty;
				// console.log(t);
				console.log(this.carlist[index].price,qty,t);
			},
			add:function(index,id){
				this.carlist[index].qty++;
				var qty = this.carlist[index].qty;
				var t = this.carlist[index].price*qty;
				console.log(this.carlist[index].price,qty,t);
			},
			total:function(event,index,id){
				if(event.target.className === 'checkbox'){
					var obj = {};
					if(event.target.checked == true){
						var price = this.carlist[index].price;
						var qty = this.carlist[index].qty;
						this.all.count += price *qty;
						var all = price*this.num;
						console.log(price,this.num, all);
						// this.all.arr[0]=money
						// console.log(this.carlist[index].id,qty);
						obj.gid = this.carlist[index].id;
						obj.qty = qty;
						this.news.push(obj);
						// console.log(this.news);
						// console.log(price,qty,this.all.count);
						// this.count += this.count;
					}else if(event.target.checked == false){
						var price = this.carlist[index].price;
						var qty = this.carlist[index].qty;
						this.all.count -=  price *qty;
						obj.gid = this.carlist[index].id;
						// let num = this.news.indexOf(obj.index);
						console.log(this.news.indexOf(obj.index));
					}
				}
				if(event.target.className === 'close'){
					
					
				}
				// console.log(this.carlist[index].id);
			},
			checkAll:function(event){
      			// console.log(event.target);
      			var checkboxs = document.querySelectorAll('.checkbox');

      			if(event.target.checked == true){
      				// console.log(888);
      				console.log(checkboxs);
      				for(var i=0; i< checkboxs.length; i++){
      					checkboxs[i].checked = true;
      				}

      			}else{
      				for(var i=0; i< checkboxs.length; i++){
      					checkboxs[i].checked = false;
      				}

      			}
			},
			del:function(event){
				if(event.target.className === 'close'){
					
				}
			}
		}
	}
</script>