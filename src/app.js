const PLAYERS = [
    'Spiderman',
    'Captain America',
    'Wonderwoman',
    'Popcorn',
    'Gemwoman',
    'Bolt',
    'Antwoman',
    'Mask',
    'Tiger',
    'Captain',
    'Catwoman',
    'Fish',
    'Hulk',
    'Ninja',
    'Black Cat',
    'Volverine',
    'Thor',
    'Slayer',
    'Vader',
    'Slingo',
  ];
  
  // initialize players with image and strength
  const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    players.forEach((player, index) => {
      detailedPlayers.push({
        name: player,
        strength: getRandomStrength(),
        image: 'images/super-' + (index + 1) + '.png', //indicates location according to the index 
        type: index % 2 == 0 ? 'hero' : 'villain', //evenplaces are heroes and odd are villians
        id: index + 1,
      });
    });
    return detailedPlayers; //this code is general for the individual identities, as the loop passes this will get itterated accordingly
  };
  
  // getting random strength
  var getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
  };
  
  const seen = (playerId) => {
    let player = document.createElement('div');
    player.classList.add('player');
    let image = document.createElement('img');
    image.setAttribute('src', playerId.image);
    image.setAttribute('alt', '');//this must be added in order to pass the test case
    let name = document.createElement('div');
    name.className = 'name';
    name.textContent = playerId.name;
    let strength = document.createElement('div');
    strength.textContent = playerId.strength;
    strength.className = 'strength';
    player.append(image, name, strength);
    return player;//create a div to store the values of individual characters
  };
  
  const buildPlayers = (players, type) => {
    let fragment = document.createElement('div');
  
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    players.filter((player) => player.type == type)
    .forEach((player) => fragment.append(seen(player)));
    return fragment.innerHTML;
  };

  // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };
