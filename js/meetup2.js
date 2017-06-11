/*
	Meetup Script JS Part
    Copyright (C) 2017  Joseph Acevedo

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
	FINISHED:
	- Contacts the script and returns a proper JSON object
	TO DO:
	- Intergrate into SA Coding Challenge Website properly.
	- Refreshing content as it is updated.
	- Minify for speed. (Possibly need to reapply semi-colons because
	most linters tend to lose it over the lack of them.)

*/

/*
	Meetup API Options and parameters are set outside the class for possible
	importing from a JSON file/Database in the future. This is only set up for
	basic viewing of stuff and will likely need refinement for more nuanced things
	like individual albums and events. 
	Consult https://www.meetup.com/meetup_api/docs/ for more info!
*/
const meetupOptions = {
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

class CoolCheck{
	constructor(optionsObj,groupURL){
		this.apibase = "https://api.meetup.com/"+groupURL+"/"
		this.options = optionsObj
		this.returnInfo = null
		//Simple variable to loop while processing the request.
		this.working = false
	}
	JSONRequest(int,opts,callback){
		/*
			Note that I dun goofed and CORS shot me in the foot once again.
		  	This is being sent to a PHP script as a POST request with all
		  	the relevant info to minimize rewriting right now.
		*/
		let letsMeet = new XMLHttpRequest()
		console.log(this.apibase);
		let baseurl = this.apibase+this.options[int].urladd
		let siteurl = window.location.origin+"/utils/lazyphpreturn.php"
		letsMeet.open("POST",siteurl,true)
		letsMeet.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		letsMeet.onreadystatechange = ()=>{
			if(letsMeet.readyState === 4 && letsMeet.status === 200){
				appendText("HERE ARE THOSE YUMMY PICTURES!")
				this.returnInfo = JSON.parse(letsMeet.responseText)
				console.log(this.returnInfo);
				callback(this.returnInfo)
				
			}else{
				appendText("WHOOPS! THERE WAS AN ERROR!")
			}
			this.working = false
		}
		let sendInfo = this.buildGetRequest(int,opts,this.options[int].type,baseurl)
		console.log(sendInfo);
		this.working = true
		letsMeet.send(sendInfo)
	}
	buildGetRequest(int,opts,type,url){
		let shortOpts = this.options[int].options
		shortOpts.url = url
		shortOpts.type = type
		let requestString = []
		//Kinda redundant need to DRY.
		for (let key in shortOpts){
				if(key in opts){
					shortOpts[key] = opts[key]
				}
			requestString.push(key+'='+shortOpts[key])
		}
		return requestString.join('&')
	}
	get AllThatInfo(){
		if (this.returnInfo != null)return this.returnInfo;
		return false;
	}
	get StillAtIt(){
		return this.working
	}
}

/*
	Some Debugging functions for the page that I am testing this on. These are
	not really needed in the grand scheme of things and can be ignored or modified
	for your purposes.
*/
let appendText = (text)=>{
	const results = document.querySelector('#results')
	results.innerHTML = text
}	

let allowClick = (reqO)=>{
	//Note, I failed an interview because I didn't know that this existed... :/
	let meetDaButton = document.querySelector('#updatemeetup')
	meetDaButton.addEventListener('click',()=>{
		reqO.JSONRequest(0,{},appendPics);
	})
}

//May add switch statement for quality selection.
let appendPics = (infoJson)=>{
	infoJson.forEach((x,i)=>{
		console.log(x);
		let docContainer = document.querySelector('#contentblock')
		let basecontainer = document.createElement('a')
		let meetupImg = document.createElement('img')
		basecontainer.className += 'linkcontainer'
		basecontainer.setAttribute('href',x.link)
		meetupImg.setAttribute('src',x.album_photo.photo_link)
		basecontainer.appendChild(meetupImg)
		docContainer.appendChild(basecontainer)
	})
}

/*
Wrapping in a DOMContentLoaded to allow for execution once the page loads
and to minimize any interference with other scripts on a page.
*/
document.addEventListener("DOMContentLoaded",()=>{
	let requestObj = new CoolCheck(meetupOptions,"San-Antonio-PHP-Meetup") 
	allowClick(requestObj);
});