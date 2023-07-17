import { axiosInstance } from "../../utils/axios"
// Product
export const getAllProduct = async() => {
    const res = await axiosInstance.get('/product/get-all-product.php')
    return res;
}

export const getProductByID = async(productID) => {
    const data = {
        productID:productID
    }
    const res = await axiosInstance.post('/product/get-product-by-id.php', data)
    return res;
}

export const  getAllProductImages = async() => {
    const res = await axiosInstance.get('/productImage/get-all-product-images.php')
    return res;
}

export const  getProductImagesByProductID = async(productID) => {
    const data = {
        productID:productID
    }
    const res = await axiosInstance.post('/productImage/get-product-images-by-product-id.php', data)
    return res;
}

// Product Specs

export const getAllBrands = async() => {
    const res = await axiosInstance.get('/brand/get-all-brands.php');
    return res;
}


export const getAllScreens = async() =>{
    const res = await axiosInstance.get('/screen/get-all-screens.php');
    return res;
}


export const getAllOperatingSystems = async() =>{
    const res = await axiosInstance.get('/operatingSystem/get-all-operating-systems.php');
    return res;
}

export const getAllProcessors = async() =>{
    const res = await axiosInstance.get('/processor/get-all-processors.php');
    return res;
}

export const getAllMemories = async() =>{
    const res = await axiosInstance.get('/memory/get-all-memories.php');
    return res;
}

export const getAllStorages = async() =>{
    const res = await axiosInstance.get('/storage/get-all-storages.php');
    return res;
}

export const getUserCart = async(username) => {
    const data = {
        username:username
    }
    const res = await axiosInstance.post('/cart/get-carts-by-username.php',data);
    return res;
}

export const insertCart = async(itemQuantity,userID,productID) => {
    const data = {
        itemQuantity:itemQuantity,
        userID:userID,
        productID:productID
    }
    const res = await axiosInstance.post('/cart/insert-cart-info.php',data);
    return res;
}

export const getCartByEmail = async(email) =>{
    const data = {
        email:email
    }
    const res = await axiosInstance.post('/cart/get-carts-by-email.php',data);
    return res;
}