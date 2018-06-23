var container = document.getElementById('container');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ghibliapi.herokuapp.com/films/');
xhr.send();
xhr.addEventListener("readystatechange", processReq, false);

function processReq(e){
	if (xhr.readyState == 4 && xhr.status == 200){
		//console.log(xhr)
		var response = JSON.parse(xhr.responseText);
		console.log(response);

		for (var i = 0; i < response.length; i++){
			//console.log(response[i].title)
			var div = document.createElement('DIV');
			div.id = 'movie' + (i);
			div.setAttribute('class', 'film')

			var picture = document.createElement('IMG');
			picture.src = 'assets/ghibli' + [i] + '.png';
			picture.setAttribute('class', 'pic')
			div.appendChild(picture);

			var title = document.createElement('P');
			title.innerHTML = response[i].title;
			div.appendChild(title);

			var producer = document.createElement('P');
			producer.innerHTML = response[i].producer
			div.appendChild(producer);

			var rotten = document.createElement('P');
			rotten.innerHTML = "Rotten Tomato Score: " + response[i].rt_score
			div.appendChild(rotten);

			var desc = document.createElement('P');
			desc.innerHTML = response[i].description
			div.appendChild(desc);

			container.appendChild(div);
		}
	}
}