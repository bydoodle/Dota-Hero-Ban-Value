const totalMatches = +document.querySelector('.textSuccess').innerText + +document.querySelector('.textDanger').innerText

let res = {};

function pageParse() {
  let table = document.querySelector('tbody');
  
  table.querySelectorAll('tr').forEach((hero) => {
		let heroName = hero.querySelectorAll('td')[0].querySelector('a').innerText;

		let matchesWith = +hero.querySelectorAll('td')[3].querySelector('a').innerText
		let matchesAgainst = +hero.querySelectorAll('td')[5].querySelector('a').innerText
    let winWith = +(hero.querySelectorAll('td')[4].querySelector('.sc-htpNat').innerText / 100);
    let winAgainst = +(hero.querySelectorAll('td')[6].querySelector('.sc-htpNat').innerText / 100);

		let chanceToMeet = ((matchesWith + matchesAgainst) / totalMatches * 100).toFixed(2);
    let chanceToWin = ((matchesWith * winWith + matchesAgainst * winAgainst) / (matchesWith + matchesAgainst) * 100).toFixed(2);
    let harm = Math.max(0, (0.5 - (chanceToWin / 100)));

    let banValue = +(chanceToMeet * harm).toFixed(2);
    
   	res[heroName] = banValue;
  })
  
  document.getElementsByClassName('sc-dNLxif')[1].click();
}

do {
  pageParse();
} while (document.getElementsByClassName('sc-dNLxif').length > 2)
  
pageParse();

console.table(
  Object.entries(res)
    .sort((a, b) => b[1] - a[1])
    .map(([hero, value]) => ({
      Hero: hero,
      "Ban Value": value
    }))
);
