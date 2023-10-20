let bagItems = [];
onload();

function onload() {
  let bagItemStr = localStorage.getItem("bagItems");
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayBagIcon();
  displayItemOnHomePage();
}

// adding items into the bag
const addToBag = (itemId) => {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  console.log(bagItems);
  displayBagIcon();
};
// updating bag  item count
function displayBagIcon() {
  let bagITemCount = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagITemCount.style.visibility = "visible";
    bagITemCount.innerText = bagItems.length;
  } else {
    bagITemCount.style.visibility = "hidden";
  }
}

function displayItemOnHomePage() {
  const itemsContainerElement = document.querySelector(".items-container");
  console.log(itemsContainerElement);

  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = "";
  items.map((item) => {
    innerHtml += ` 
        <div class="item-details">
          <img class="item-image" src="${item.image}" alt="item image">
          <div class="rating">
              ${item.rating.stars} ⭐ | ${item.rating.count}
          </div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
              <span class="current-price">Rs ${item.current_price}</span>
              <span class="original-price">Rs ${item.original_price}</span>
              <span class="discount">(${item.discount_percentage}% OFF)</span>
          </div>
          <button class="btn-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`;
  });
  itemsContainerElement.innerHTML = innerHtml;
}
