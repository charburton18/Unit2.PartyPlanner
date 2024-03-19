//PARTY PLANNER: Display a list of the names, dates, times, locations, and descriptions of all the events that are happening.

const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events`;

// UPDATE STATE WITH PARTIES FROM API -------------------------


// define state as an object with a key of events and value of []
// Eventually set equal to the array that will come from the API
const state = {
  events: [],
};

// grab HTML elements with querySelectors
const eventList = document.querySelector("#events"); // prints the ul

// Sync state with API and rerender
async function render() {
  await getEvents();
  renderEvents();
}
render();

// DEFINE THE getEvents FUNCTION ------------------------------
// define a variable called API_URL
// define a variable called response = fetched data from API_URL (Await!)
// define a variable called json = translate response from JSON string by using .json(). Await!
// ^all of the above is within try{}
// if error is received, then console.log error
async function getEvents() {
  try{
    const response = await fetch(API_URL);	
    const json = await response.json();
    console.log(json.data);
    state.events = json.data;
  } catch (error){
    console.log('error!', error);
  }
}

getEvents();


// CREATE THE renderEvents FUNCTION ----------------------------

//Render events from state



function renderEvents() {
  // loop thru state.events (our original array that got replaced with API data)
  // for each event maybe map
  // create li
  // use innerHTML to add the event name
  // append to eventList
  
  state.events.forEach( (event) => {
    const li = document.createElement('li');
    li.innerHTML = `${event.name} - ${event.description}`;
    eventList.appendChild(li);
  });
  
//   //or use map
//   const eventLiElements = state.events.map((event) => {
//     const li = document.createElement('li');
//     li.innerText = `${event.name} - ${event.description}`;
//     return li;
//   })
  
//   console.log(eventLiElements);
//   eventList.replaceChildren(...eventLiElements);
}

renderEvents();