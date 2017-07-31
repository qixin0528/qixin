
import axios from 'axios'
import store from "./store"
const mutations={
	setdata:function(){
		axios.get('https://ilvb.mmall.com/room/get/HallRoomlistV2')
			.then(function(response){
				store.state.data = response.data.dataMap
//				console.log(store.state.data[1].id)
			})
			.catch(function(err){
			  	console.log(err);
			});
	},
	setmbm:function(){
		axios.get('https://cms.mmall.com/cms-web/home/index',{
		  params:{
//		  	data:''
		  }
		}).then(function(response){
			store.state.mbmdata = response.data.dataMap.promotionVo
			
			store.state.mddata = response.data.dataMap.lifeVoList
			
			store.state.mdb = response.data.dataMap.brandList
			
			store.state.mbest = response.data.dataMap.topicList
			
			store.state.mbanner = response.data.dataMap.advertisementList
			
//			this.data = response.data.dataMap.promotionVo.currentTime
//			console.log(store.state.mddata)
			
		})
		.catch(function(err){
		  console.log(err);
		});
	},
	classlist:function(){
		axios.get('https://cms.mmall.com/cms-web/home/category/list',{
			params:{
				
			}
		}).then(function(response){
			store.state.classlf = response.data.dataMap
//			console.log(store.state.classlf)
		}).catch(function(err){
			console.log(err)
		});
	}
	,
	shoplist:function(){
		axios.get('https://cms.mmall.com/cms-web/home/market/index',{
			params:{
				cityId:-1,
			}
		}).then(function(response){
			store.state.shoppinglist = response.data.dataMap.advertisementList;
			store.state.shoppingslist = response.data.dataMap.articleMarketList
			console.log(store.state.shoppingslist)
		}).catch(function(err){
			console.log(err)
		});
	}
}

export default mutations