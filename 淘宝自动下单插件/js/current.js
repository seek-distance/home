let startDate = new Date("November 10,2017 23:59:57");
$(function() {
    let url = location.href;
    let now = new Date();
    if (now < startDate){
        checkTime();
    }else{
        if (url.includes("cart.taobao.com/cart.htm")) {
            dealCart();
        } else if (url.includes("buy.tmall.com/order/confirm_order")){
            //confirmOrder();
        } else if (url.includes("alipay.com/standard/lightpay")){
            //pay();
        }
    }
})

function checkTime() {
    setInterval(() => {
        let now = new Date();
        console.log(now)
        if (now > startDate){
            location.reload();
        }
    }, 1000)
}

function dealCart() {
    let now = new Date();
    let cartTime = new Date("November 10,2017 23:59:59");
    if (now > cartTime) {
        $('#J_SelectAllCbx2').click();
        setTimeout(() => {
           $('#J_SmallSubmit').click();
        }, 10);
        
    }else{
        location.reload();
    }
}

function confirmOrder() {
    $('.go-btn').click();
}

function pay() {
    $('#payPassword_rsainput').val('sk669545');
    $('#J_authSubmit').click();
}