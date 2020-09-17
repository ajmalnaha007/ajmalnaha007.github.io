const content = document.getElementById('content-section');
const map_sections = [document.getElementsByClassName('land')];
const headerHeight = 450;
const headerHeightOffset = window.pageYOffset + content.getBoundingClientRect().top - headerHeight;
let active_section = null;

const details = [
    [
        {
            "id": "IN",
            "name": "India",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_LMPjq5rCrNdQ9EmhTxDU8AGlOp7Z4vnzcO18c-Ml5TtaU-u9",
            "desc": "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world"
        },
        {
            "id": "IN",
            "name": "Second India",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_LMPjq5rCrNdQ9EmhTxDU8AGlOp7Z4vnzcO18c-Ml5TtaU-u9",
            "desc": "Second India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world"
        }
    ],
    [
        {
            "id": "CA",
            "name": "Canada",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHkEGEivIt24Kz85rRi0RY9QgK_SOY-3HDOyYFgierQFcixVmy",
            "desc": "Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world's second-largest country by total area."
        }
    ],
    [
        {
            "id": "RU",
            "name": "Russia",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXJ5FYu8NTY54WrHk8pV3yQZPitMTL2uQHyVunWJtKowlm1Zbn",
            "desc": "Russia, officially the Russian Federation, is a country in Eastern Europe with a vast expanse of territory that stretches across Northern Asia."
        }
    ],
    [
        {
            "id": "AR",
            "name": "Argentina",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS75Cp7F94ciJ3yJaZ5e6eV2kT-LCcz4p_4CB-klp6vRaoMdYnM",
            "desc": "Argentia is a Canadian commercial seaport and industrial park located in the Town of Placentia, Newfoundland and Labrador. It is situated on the southwest coast of the Avalon Peninsula and defined by a triangular shaped headland which reaches northward out into Placentia Bay creating a natural harbour 3 km in length"
        }
    ]
]


function contentDiv(title, image, description) {
    return `<div class="card">
            <h5 id="head" class="card-title">${title}</h5>
            <div class="card-row no-gap p-20">
              <div class="col-img">
                <img src=${image} id="image" class="card-img" alt="" />
              </div>
              <div class="col-content">
                <div class="card-body">
                  <p id="desc" class="card-text">${description}</p>
                </div>          
              </div>
              <div class="col-footer">
                <div class="card-footer">
                    <button class="btn btn-pro">More</button>
                </div>
              </div>
            </div>
          </div>`
}


// grab the country name and display
function showCountrydetails(action) {
    let countryID = event.target.getAttribute('id');
    let result = details.find(({ id }) => id === countryID);
    if (result == undefined)
        changeMapColor();
    if (active_section != null)
        active_section.style["fill"] = '#d7232c';
    details.map((item) => {
        if (item[0].id === countryID) {
            changeMapColor();
            event.target.style["fill"] = '#d7232c';
            if (active_section != null)
                active_section.style["fill"] = '#d7232c';
            if (action === 'click') {
                active_section = event.target;
                changeMapColor();
                active_section.style["fill"] = '#d7232c';
                if (content.style.display === "none")
                    content.style.display = "block";
                if (item.length) {
                    let content_div = "";
                    item.map(detailedItem => {
                        content_div = content_div + contentDiv(detailedItem.name, detailedItem.image, detailedItem.desc);
                        content.innerHTML = content_div;
                    })
                }
                window.scroll({ top: headerHeightOffset, behavior: "smooth" });
            }
        }
    })
}

// set event listener on the map
map.addEventListener('click', function (event) {
    if (event.target.classList.contains('land'))
        showCountrydetails('click');
});

map.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('land')) {
        showCountrydetails('hover')
    }
});


function changeMapColor() {
    map_sections.map((item) => {
        details.map((detail) => {
            item[detail[0]['id']].style["fill"] = '#ed8e8e';
            item[detail[0]['id']].style.cursor = 'pointer';
        })
    })
}
changeMapColor();
