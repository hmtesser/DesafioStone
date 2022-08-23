export SWapi {



async function fetchCharacter(){
  const randomChar = ((Math.random() * 83) + 1).toFixed(0);
  const url = `https://swapi.dev/api/people/${randomChar}`;
  let screenText;
 const response  = await fetch(url);
  const data = await response.json();
  console.log(data.name);
  screenText = data.name;
}




return SWapi;
