const BASE_URL = "http://localhost:3001";

///POST REQUEST
const btnAddProduct = document.querySelector("#btn-add");
const Name = document.querySelector("#name");
const ImageUrl = document.querySelector("#image");
const Description = document.querySelector("#description");
const Price = document.querySelector("#price");
const Stock = document.querySelector("#stock");
const Category = document.querySelector("#category");
const date = document.querySelector("#date");

btnAddProduct &&
  btnAddProduct.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      !Name.value ||
      !ImageUrl.value ||
      !Description.value ||
      !Price.value ||
      !Stock.value ||
      !Category.value ||
      !date.value
    ) {
      return swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the  fileds",
      });
    }

    const postdata = {
      id: self.crypto.randomUUID(),
      name: Name.value,
      image: ImageUrl.value,
      description: Description.value,
      price: Number(Price.value),
      stock: Stock.value,
      category: Category.value,
      date: date.value,
    };
    axios.post(`${BASE_URL}/products`, postdata).then((response) => {
      if (response.status === 201) {
        swal.fire({
          icon: "Success",
          title: "Success",
          text: "Product add successfully",
        });
      }
    });
  });

let searchArr = [];
///GET REQUEST
const getProduct = document.querySelector("#get_data");
axios.get(`${BASE_URL}/products`).then((response) => {
  response.data.map((product, index) => {
    getProduct.innerHTML += `
        <div class="col-xl-3  ">

        <div class="card p-2  " >
        <img src=${product.image} class="card-img-top" alt="...">
        <div class="card-body">
            <p  class="check_stock text-center  ">${
              product.stock

            }</p>
          <h5 class="card-title">${product.name}</h5>
          <h2>
          ${
            typeof product.price === "number"
              ? product.price.toFixed(2)
              : product.price
          }
           AZN</h2>
          <p class="card-text">${product.description}</p>
          
          <div class="star-group">
          
          <svg class="star-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
          <svg class="star-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
          <svg class="star-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
          <svg class="star-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
          <svg class="star-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <span class="rating-message"></span>
          </div>
          
          <h3 class="mb-4">${product.category}</h3>
          <p>${moment(product.date).add(10, "days").calendar()}</p>
          <button class="btn delete_product btn-danger">Delete</button>
        </div>
      </div>
        
        </div>
        
        `;
    const cardss = document.querySelectorAll(".card");
    ///Check Stock
     
    ///Fill Star
   
    let message = ["Terrible", "Bad", "Okay", "Good", "Amazing"];

    function resetStarsForCard(card) {
      const fillStar = card.querySelectorAll(".star-fill");
      fillStar.forEach((star) => {
        star.style.stroke = "#000";
        star.style.fill = "none";
      });
    }

    function handleStarClickForCard(card, index) {
      const fillStar = card.querySelectorAll(".star-fill");

      resetStarsForCard(card);
      for (let i = 0; i <= index; i++) {
        fillStar[i].style.stroke = "#fcc419";
        fillStar[i].style.fill = "#fcc419";
      }
      const messageElement = card.querySelector(".rating-message");

      messageElement.textContent = message[index] || "";
    }

    cardss.forEach((card) => {
      const fillStar = card.querySelectorAll(".star-fill");
      const check_stock = card.querySelectorAll(".check_stock")
      fillStar.forEach((star, index) => {
        star.addEventListener("click", () =>
          handleStarClickForCard(card, index)
        );
      });
      check_stock.forEach((check)=>{
        if(check.textContent === "Stokda var"){
          check.classList.add("bg-success-subtle")
          check.classList.add("text-success")
         
        }
        else{
          
          check.classList.add("bg-danger")
          check.classList.add("text-light")
        }
      })
    });

    ///Search Product
    const searchProduct = document.querySelector("#search-input");
    const cards = document.querySelectorAll(".card");

    searchProduct.addEventListener("input", () => {
      const searchText = searchProduct.value.toLowerCase();

      cards.forEach((card) => {
        const productName = card.querySelector(".card-title").textContent.toLowerCase(); 

        if (productName.includes(searchText)) {
          card.classList.remove("hide");
          card.classList.add("show");
        } else {
          card.classList.remove("show");
          card.classList.add("hide");
        }
      });
    });

    ///DELETE REQUEST
    const DeleteBtn = document.querySelectorAll(".delete_product");

    for (let index = 0; index < DeleteBtn.length; index++) {
      const element = DeleteBtn[index];
      element.addEventListener("click", (event) => {
        event.preventDefault();
        axios.delete(`${BASE_URL}/products/${product.id}`).then((response) => {
          response.status === 200 &&
            swal.fire({
              icon: "success",
              title: "Success",
              text: "Delete product has been added!",
            });
        });
      });
    }
  });
});
