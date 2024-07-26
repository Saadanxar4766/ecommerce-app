// const fetchdata = async () => {
//     const response = await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=853a8553c9b84a3f8c3aeac27725a800")
//           const data = await response.json();
//           console.log( data)
  
//           for (let i = 0; i < data.length; i++) {
//             const element = `<div class="p-4 md:w-1/3">
//       <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//         <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${data[i].articles[0].image}" alt="blog">
//         <div class="p-6">
//           <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
//           <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
//           <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//         </div>
//       </div>`;
//       container.innerHTML += element
//           }
//   }
  
//   fetchdata()

let search_input = document.getElementById("search_input")
console.log(search_input);

const fetchdata = async () => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=853a8553c9b84a3f8c3aeac27725a800");
  const data = await response.json();
  console.log(data);

  const container = document.getElementById('container'); // Select the container element

  for (let i = 0; i < data.articles.length; i++) {
    // function ceateelement(data){}
    const element = `<div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${data.articles[i].urlToImage}" alt="blog">
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${data.articles[i].author}</h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.articles[i].title}</h1>
          <p class="leading-relaxed mb-3">${data.articles[i].description}</p>
          <p class="leading-relaxed mb-3">${data.articles[i].publishedAt}</p>
        </div>
      </div>
    </div>`;
    container.innerHTML += element;
  }
};

fetchdata();


