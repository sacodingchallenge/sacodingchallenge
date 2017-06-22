/*
	Note that a lot of this piggybacks off of the meetup2 script.
	Consult that for more information.
*/
//Must be global. Not good, but need something to workaround.
let htmlArr = []
let eventsFetch = new CoolCheck(meetupOptions,"San-Antonio-PHP-Meetup")

//<div class="content container"> wrapper.
let pushOnToPage = (htmlStr)=>{
	for (htmlPart in htmlArr){
		let shortHTML = htmlArr[htmlPart][1]
		const pushContainer = document.querySelector('#loadingcontainer')
		let loadedContainer = document.createElement('div')
		loadedContainer.className += "content container"
		loadedContainer.innerHTML = shortHTML
		pushContainer.appendChild(loadedContainer)
	}
	
}
let pushIntoArr = (htmlStr,truIndex)=>{
	htmlArr.push([truIndex,htmlStr])
}
let appendEvents = (reqInfo)=>{
	//Really bad. Should have though about it sooner.
	console.log(reqInfo.length)
	let lengthInterval = setInterval(()=>{
		if(htmlArr.length == reqInfo.length){
			console.log(htmlArr)
			pushOnToPage(htmlArr)
			clearInterval(lengthInterval)
		}
	},500)	
	for (let i = 0; i < reqInfo.length;i++){
		//Sending along the placement to make sorting dates a little easier.
		eventsFetch.JSONRequest(2,reqInfo[i],"/components/partialevents.php",pushIntoArr,i)
	}
}

document.addEventListener('DOMContentLoaded',()=>{
	eventsFetch.JSONRequest(1,{},"/utils/lazyphpreturn.php",appendEvents)
})