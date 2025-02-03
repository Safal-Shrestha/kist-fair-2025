let FetchedData;
fetch('/backend/fetch_itinerary.php').then(res => res.json()).then(data=> FetchedData = data).catch(
  err => console.error(err)
);
console.log(FetchedData);