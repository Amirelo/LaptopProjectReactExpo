

export const priceFormat = (price) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
    return formatter.format(price);
}

export const discountFormat = (discount) => {
    if (discount.substring(0, 1) == '%') {
        result = discount.substring(1, 3) + "% off";
    }
    if (discount.length == 0) {
        result = "";
    }
    return result;
}

export const dataCheck = (data,type) => {
    if(data==null){
        setTimeout(() => {dataCheck},1000)
    } else{
        return data[type];
    }
}