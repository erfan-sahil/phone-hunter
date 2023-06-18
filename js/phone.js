let mobileFinder = (searchText) =>{

    url= `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => printOut(data.data))

}

let printOut = (mobiles) =>{

    let mobileContainer = document.getElementById('mobile-container')

    mobileContainer.innerHTML = ` `;

    for(let mobile of mobiles){
        let newDiv = document.createElement('div')
        newDiv.classList.add('col')
        newDiv.innerHTML  = `
        
        <div class="card h-100 border border-danger-subtle rounded shadow p-3 mb-5 ">
        <img src="${mobile.image}" class="card-img-top p-5" alt="...">
        <div class="card-body">
          <h3 class="card-title fw-bold">${mobile.phone_name}</h3>
          <button class="btn btn-outline-danger" onclick = "mobileDetail('${mobile.slug}')"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> Details </button>
        </div>
      </div>
        
        `

        mobileContainer.appendChild(newDiv)
    }


}


let mobileDetail = (id) =>{

    let url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => mobileDetailInfo(data.data))

    let mobileDetailInfo = (mobile) =>{

        let mobileDetailContainer = document.getElementById('mobile-detail-container')

        mobileDetailContainer.innerHTML = `
        
        <div class="col">
        <div class="card">
          <img src="${mobile.image}" class="card-img-top p-4" alt="...">
          <div class="card-body">
            <h2 class="card-title"> ${mobile.name}</h2>
            <h5 class="card-text"> ${mobile.releaseDate}</h5>
            <h4> Features </h4>
            <ul>
            
            <li>Storage: Storage : ${mobile.mainFeatures.storage} </li>
            <li>Storage: Display Size : ${mobile.mainFeatures.displaySize} </li>
            <li>Storage: Chipset : ${mobile.mainFeatures.chipSet} </li>
            <li>Storage: Memory : ${mobile.mainFeatures.memory} </li>
            <li>Storage: Sensors : ${mobile.mainFeatures.sensors} </li>
            
            </ul>
          </div>
        </div>
      </div>

        `


    }

}

let mobileSearch = () =>{

    let searchField = document.getElementById('search-field')
    let searchFieldValue = searchField.value ;

    mobileFinder(searchFieldValue)

    searchFieldValue = '';

}



mobileFinder('iphone')