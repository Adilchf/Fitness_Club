export const exerciseOptions = {
  method: 'GET', 
  headers: {
    
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const youtubeOptions = {

method: 'GET',
headers: {
  'X-RapidAPI-Key': 'a62510f3dfmsha4c2985f0113101p12fcb3jsn01a78b438ce9',
  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
};


export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
