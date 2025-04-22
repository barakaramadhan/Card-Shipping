let priceElem = document.getElementById('price');
let subTotalElem = document.getElementById('subTotal');
let shippingElem = document.getElementById('shipping');
let discountElem = document.getElementById('discount');
let totalElem = document.getElementById('total');
let quantityElem = document.getElementById('quantity');
let textVoucherElem = document.getElementById('textVoucher');
let codeVoucher = document.getElementById('codeVoucher');

subTotalElem.innerHTML = priceElem.innerHTML;
function totalAll(subTotal, shipping = 0, discount = 0){
  return Number(subTotal) + Number(shipping) - Number(discount); // jadi total nya di tambah dengan ongkir lalu jika dia ada diskon maka di kurang
}

// console.log(totalAll(10000, 2000, 5000));
 
totalElem.innerHTML = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);


// codingan icon plus dan minus
let tambah = (num) => {
  let number = parseFloat(quantityElem.value);
  number += num;
  quantityElem.value = number;

  let hasil = number * priceElem.innerHTML;
  subTotalElem.innerHTML = hasil;

  let total = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);
  totalElem.innerHTML = total;
  
}

let kurang = (num) => {
  let number = parseFloat(quantityElem.value);
  number -= num;
  quantityElem.value = number;

  let hasil = number * priceElem.innerHTML;
  subTotalElem.innerHTML = hasil;

  let total = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);
  totalElem.innerHTML = total;
}

function btnVoucher(){
  let inputVoucher = codeVoucher.value;
  // console.log(inputVoucher);
  if (inputVoucher === "abudzar") {
    textVoucherElem.innerHTML = "Voucher 20% Berhasil di gunakan";
    textVoucherElem.classList.remove('applied');
    textVoucherElem.classList.add('success');  
    discountElem.innerHTML = 2000;
  }else if (inputVoucher === "baraka") {
     textVoucherElem.innerHTML = "Voucher 50% Berhasil di gunakan";
     textVoucherElem.classList.remove('applied');
     textVoucherElem.classList.add('success');
     discountElem.innerHTML = 5000;
  }else{
    textVoucherElem.innerHTML = "Voucher Salah";
    textVoucherElem.classList.remove('applied');
    textVoucherElem.classList.add('reject');
    discountElem.innerHTML = 0;
  }
  
}
