let FetchedData;
let fetchData = async () =>{
  let fetch = await fetch('backend/fetch_itinerary.php');
  let FetchedData = fetch.json();
  console.log(FetchedData);
}