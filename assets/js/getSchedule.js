let FetchedData;

let fetchData = async () => {
  let f = await fetch('backend/fetch_itinerary.php');
  
  FetchedData = await f.json(); 
  
  console.log(FetchedData); 
};

fetchData();
