let mobileFinder = () =>{

    url= `https://openapi.programming-hero.com/api/phones?search=iphone`
    fetch(url)
    .then(res => res.json())
    .then(data => printOut(data.data))

}

let printOut = (mobiles) =>{

    let mobileContainer = document.getElementById('mobile-container')

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
        
        

        `


    }

}



mobileFinder()