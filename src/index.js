import './style.css';
function loadTeam(){
  fetch('http://localhost:3000/teams-json/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(team)
      
    }),
  };
}

function createTeamRequest(team) {
  let team = {
    promotion: "WON3",
    members: "Your Name",
    name: "CV",
    url: 'https://github.com/nmatei/teams-networking'
  };
  
}

console.warn('app ready');

function getTeamAsHTML(team) {
  return `<tr>
    <td>${team.promotion}</td>
    <td>${team.members}</td>
    <td>${team.name}</td>
    <td>${team.url}</td>
    <td>x</td>
  </tr>`;
}

function renderTeams(teams) {
  //console.warn('render', teams);
  const teamsHTML = teams.map(getTeamAsHTML);
  //console.info(te{amsHTML);

  document.querySelector('#teamsTable tbody').innerHTML = teamsHTML.join('');
}

function loadTeams() {
  const promise = fetch('http://localhost:3000/teams-json')
    .then(r => r.json())
    .then(teams => {
      renderTeams(teams);
      return teams;
    });

  //console.warn('loadTeams', promise);
}
createTeamRequest(team);

function onSubmit(e) {
  e.preventDefault();
  console.warn('pls save all value');
}

function initEvents() {
  document.querySelector('#teamsForm').addEventListener('submit', onSubmit);
}

initEvents();
loadTeams();
