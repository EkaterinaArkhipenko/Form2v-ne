// grab everything we need
const bottlesInput = document.querySelector('[name=bottles]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');

// create functions we'll need
function calculateCost() {
  const bottles = bottlesInput.value;
  const quantity = quantityInput.value;

  if (quantity ==1) {
var cost=bottles*0.01+1500
} else if (quantity ==2) {
 cost=bottles*0.01+3000
} else if (quantity ==3) {
 cost=bottles*0.01+3000
} else if (quantity >=4) {
 cost=bottles*0.01+4000
};


  console.log(cost);
  total.innerText = "€" + cost.toFixed(2);
}

function updateQuantityLabel() {
  const quantity = quantityInput.value;
  quantityLabel.innerText = quantity;
}

// on first run
calculateCost();

// add event listeners
bottlesInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', calculateCost);
quantityInput.addEventListener('input', updateQuantityLabel);
