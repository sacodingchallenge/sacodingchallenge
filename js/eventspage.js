/*
	Note that a lot of this piggybacks off of the meetup2 script.
	Consult that for more information.
*/
//Must be global. Not good, but need something to workaround.
let htmlArr = []


//<div class="content container"> wrapper.
let pushOnToPage = (htmlStr)=>{
	const pushContainer = document.querySelector('#loadingcontainer')
	let loadedContainer = document.createElement('div')
	loadedContainer.className += "content container"
	loadedContainer.innerHTML = htmlStr
	pushContainer.appendChild(loadedContainer)
}

let appendEvents = (reqInfo)=>{
	//Really bad. Should have though about it sooner.
	let siteFetch = new CoolCheck(meetupOptions,"San-Antonio-PHP-Meetup")
	
	for (let i = 0; i < reqInfo.length;i++){
		siteFetch.JSONRequest(2,reqInfo[i],"/components/partialevents.php",pushOnToPage)
	}
}

document.addEventListener('DOMContentLoaded',()=>{
	let eventsFetch = new CoolCheck(meetupOptions,"San-Antonio-PHP-Meetup")
	eventsFetch.JSONRequest(1,{},"/utils/lazyphpreturn.php",appendEvents)
})