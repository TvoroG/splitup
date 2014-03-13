(function () {
var list = document.getElementById('list'),
	numg = document.getElementById('numg'),
	place = document.getElementById('groups-holder'),
	trim = function (s) {return s.replace(/^\s+|\s+$/g, '');};

var	doshuffle = function (l) {
		for(var j, x, i = l.length; i;
			j = Math.floor(Math.random() * i),
			x = l[--i],
			l[i] = l[j],
			l[j] = x);
	},

	dosplit = function (l, n) {
		var len, per,
			ni = 0, cper,
			res = [], j;

		while (ni < n) {
			var cres = [];
			len = l.length;
			per = Math.round(len / (n - ni)),
			cper = per == 0 ? len : per;
			
			for (j = cper; j; j--)
				cres.push(l.shift());

			res.push(cres);
			ni++;
		}
		return res;
	},

	show = function (l) {
		var i, div, ul, li;
		place.innerHTML = '';
		
		for (i = 0; i < l.length; i++) {
			div = document.createElement('div');
			ul = document.createElement('ul');
			
			div.className = 'col-md-3';
			ul.className = 'list-group';

			for (var gr = l[i], j = 0; j < gr.length; j++) {
				li = document.createElement('li');
				li.className = 'list-group-item';
				li.innerHTML = gr[j];
				ul.appendChild(li);
			}
			
			div.appendChild(ul);
			place.appendChild(div);
		}
	},

	split = function () {
		var l = trim(list.value),
			n = parseInt(numg.value),
			ls = l.split('\n');

		
		if (l === '' || isNaN(n))
			return;

		if (ls.length < n)
			return;

		doshuffle(ls);
		show(dosplit(ls, n));
	};

	document.getElementById('split-btn').onclick = split;

var defaultList = [
	'Боровилов',
	'Вафина',
	'Гаффаров',
	'Голубкова',
	'Данкович',
	'Зарипов',
	'Звездова',
	'Зыкова',
	'Кадырова',
	'Колпаков',
	'Ксенофонтов',
	'Кузнецова',
	'Палачева',
	'Пахомов',
	'Ростова',
	'Салахов',
	'Степанов'
], defaultNum = 3;
	
	list.value = defaultList.join('\n');
	numg.value = defaultNum;
}());
