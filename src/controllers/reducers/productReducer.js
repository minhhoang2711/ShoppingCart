var initializeState = [
    {
        id: 1,
        name: 'Iphone 8 Plus',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417455',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Samsung Galaxy 9',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SL1500_.jpg',
        description: 'Sản phẩm do samsung sản xuất',
        price: 800,
        inventory: 15,
        rating: 4
    },
    {
        id: 3,
        name: 'OPPO F11',
        image: 'https://i0.wp.com/www.couponsdad.in/wp-content/uploads/2019/04/affix-back-cover-for-oppo-f11-protransparent-dual-protection-silicon.jpeg    ',
        description: 'Sản phẩm do oppo sản xuất',
        price: 300,
        inventory: 20,
        rating: 4
    },
]

const productReducer = (state = initializeState, action) => {
    switch (action.type) {
        //lúc đầu chỉ nên tạo trường hợp mặc định cho reducer, sau đó thêm sau
        default:
            return [...state];
    }
}

export default productReducer;
