

class CoolCheck{
	constructor(){
		let apibase = "https://api.meetup.com/San-Antonio-PHP-Meetup/"
		let options = {
			0:{
				urladd:"photo_albums?",
				type:"GET",
				options:{
					page:6,
					offset:0,
					//Empty because I have no clue what to do with them as of
					//right now.
					fields:null
				}
			},
			1:{
				urladd:"events?",
				type:"GET",
				options:{
					desc:false,
					page:50,
					scroll:null,
					status:"upcoming"
				}
			}
		}
	}
	JSONRequest(int,opts){
		let letsMeet = new XMLHttpRequest()
		let baseurl = this.apibase+this.options[int].urladd
		letsMeet.open(this.options[int].type,baseurl,true)
		letsMeet.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		letsMeet.onreadystatechange = ()=>{
			if(letsMeet.readyState === 4 && letsMeet.status === 200)console.log(letsMeet.responseText);
		}
		let sendInfo = this.buildGetRequest(int,opts)
	}
	buildGetRequest(int,opts){
		let shortOpts = this.options[int]
		let requestString = ''
		//Kinda redundant need to DRY.
		for (let key in shortOpts){
				if(key in opts){
					shortOpts[key]
				}
		}
	}
}



let allowClick = (reqO)=>{
	let meetDaButton = document.querySelector('#updatemeetup')
	meetDaButton.addEventListener('click',()=>{
		reqO.JSONRequest(0,{})
	})
}

document.addEventListener("DOMContentLoaded",()=>{
	let requestObj = new CoolCheck() 
	allowClick(requestObj);
});