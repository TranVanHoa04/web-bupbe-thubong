// Mảng 1: Danh sách sản phẩm GẤU BÔNG
var gauBongList = [
    {
        id: 1,
        img: "../img/product/gaubong/gaubong1.webp",
        title: "Thú Bông Mã Tiểu Dã 25 cm",
        price_old: 266000,   
        price_sale: 239000,  
        discount: "-10%",    
        quantity: 0
    },
    {
        id: 2,
        img: "../img/product/gaubong/gaubong2.webp",
        title: "Thú Bông Doraemon - Phiên Bản Đặc Biệt Tết Bính Ngọ 2026 - 23 cm",
        price_old: 220000,
        price_sale: 198000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 3,
        img: "../img/product/gaubong/gaubong3.webp",
        title: "Gấu Bông Đồng Chí Vệ Quốc Quân 25 cm",
        price_old: 302000,
        price_sale: 271000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 4,
        img: "../img/product/gaubong/gaubong4.webp",
        title: "Gấu Bông Yêu Nước Áo Quốc Kỳ 20 cm",
        price_old: 173000,
        price_sale: 155000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 5,
        img: "../img/product/gaubong/gaubong5.webp",
        title: "Đồ Chơi Blindbox Thú Bông Lovely Emma - Bunny Alliance - ToTy RE77",
        price_old: 329000,
        price_sale: 296000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 6,
        img: "../img/product/gaubong/gaubong6.webp",
        title: "Baby Three Thú Bông Liila Lucky Cat V3 (Blindbox Chính Hãng)",
        price_old: 349000,
        price_sale: 244000,
        discount: "-30%",
        quantity: 0
    },
    {
        id: 7,
        img: "../img/product/gaubong/gaubong7.webp",
        title: "Thú Bông Gấu Koala 14 cm - 16T7-13",
        price_old: 187000,
        price_sale: 168000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 8,
        img: "../img/product/gaubong/gaubong8.webp",
        title: "Thú Bông Capybara 30 cm - Nuan Nuan SLKPLWQ30 (Mẫu Màu Giao Ngẫu Nhiên)",
        price_old: 357000,
        price_sale: 178000,
        discount: "-50%",
        quantity: 0
    },
    {
        id: 9,
        img: "../img/product/gaubong/gaubong9.webp",
        title: "Thú Bông Ghost 40 cm",
        price_old: 240000,
        price_sale: 216000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 10,
        img: "../img/product/gaubong/gaubong10.webp",
        title: "Thú Bông Chim Cánh Cụt Đeo Túi Lông Xù 30 cm",
        price_old: 238000,
        price_sale: 214000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 11,
        img: "../img/product/gaubong/gaubong11.webp",
        title: "Thú Nhồi Bông Tuần Lộc Noel 25 cm",
        price_old: 114000,
        price_sale: 102000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 12,
        img: "../img/product/gaubong/gaubong12.webp",
        title: "Hươu Con Kể Chuyện - Món Quà Trí Tuệ Cho Bé Size 25cm",
        price_old: 529000,
        price_sale: 476000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 13,
        img: "../img/product/gaubong/gaubong13.webp",
        title: "Chó Bông Kể Chuyện - Món Quà Trí Tuệ Cho Bé Size 25cm",
        price_old: 529000,
        price_sale: 476000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 14,
        img: "../img/product/gaubong/gaubong14.webp",
        title: "Thỏ Bông Kể Chuyện - Tai Hồng Chấm Bi - Món Quà Trí Tuệ Cho Bé Size 25cm",
        price_old: 529000,
        price_sale: 476000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 15,
        img: "../img/product/gaubong/gaubong15.webp",
        title: "Thỏ Bông Kể Chuyện - Mắt Xanh Loại To - Món Quà Trí Tuệ Cho Bé Size 40cm",
        price_old: 659000,
        price_sale: 625000,
        discount: "-10%",
        quantity: 0
    },

];

// Mảng 2: Danh sách sản phẩm BÚP BÊ (Bao gồm sản phẩm trong ảnh của bạn)
var bupBeList = [
    {
        id: 101, 
        img: "../img/product/bupbe/bupbe1.webp",
        title: "Đồ Chơi Búp Bê Tiệm Bánh Vui Vẻ - Funville 81119DRE",
        price_old: 249000,
        price_sale: 224000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 102, 
        img: "../img/product/bupbe/bupbe2.webp",
        title: "Đồ Chơi Búp Bê Mini 12 cm Công Chúa - Funville 81041DRE-1 - Mẫu 4",
        price_old: 69000,
        price_sale: 62000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 103, 
        img: "../img/product/bupbe/bupbe3.webp",
        title: "Búp Bê Bé Gái Đang Ngủ - ToTy LD22 - Bé Gà Con",
        price_old: 69000,
        price_sale: 62000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 104, 
        img: "../img/product/bupbe/bupbe4.webp",
        title: "Đồ Chơi Búp Bê 29 cm Nàng Tiên - Funville 81038DRE - Mẫu 4",
        price_old: 179000,
        price_sale: 162000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 105, 
        img: "../img/product/bupbe/bupbe5.webp",
        title: "Đồ Chơi Búp Bê 29 cm Nàng Tiên - Funville 81038DRE - Mẫu 5",
        price_old: 179000,
        price_sale: 162000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 106, 
        img: "../img/product/bupbe/bupbe6.webp",
        title: "Đồ Chơi Búp Bê 29 cm Nàng Tiên - Funville 81038DRE - Mẫu 6",
        price_old: 179000,
        price_sale: 162000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 107, 
        img: "../img/product/bupbe/bupbe7.webp",
        title: "Đồ Chơi Búp Bê 29 cm Nàng Tiên - Funville 81038DRE - Mẫu 7",
        price_old: 179000,
        price_sale: 162000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 108, 
        img: "../img/product/bupbe/bupbe8.webp",
        title: "Đồ Chơi Búp Bê Mini 12 cm - Funville 81044DRE - Mẫu 3",
        price_old: 69000,
        price_sale: 62000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 109, 
        img: "../img/product/bupbe/bupbe9.webp",
        title: "Đồ Chơi Búp Bê 29 cm Nàng Tiên - Funville 81038DRE - Mẫu 1",
        price_old: 179000,
        price_sale: 162000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 110, 
        img: "../img/product/bupbe/bupbe10.webp",
        title: "Đồ Chơi Búp Bê Người Mẫu Thời Trang Emily",
        price_old: 175000,
        price_sale: 195000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 111, 
        img: "../img/product/bupbe/bupbe11.webp",
        title: "Đồ Chơi Búp Bê Người Mẫu Thời Trang Emily",
        price_old: 175000,
        price_sale: 195000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 112, 
        img: "../img/product/bupbe/bupbe12.webp",
        title: "Đồ Chơi Búp Bê 8603",
        price_old: 104000,
        price_sale: 95000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 113, 
        img: "../img/product/bupbe/bupbe13.webp",
        title: "Đồ Chơi Búp Bê Đáng Yêu Cho Bé - Shenzhen 515-31 - Mẫu 1",
        price_old: 89000,
        price_sale: 80000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 114, 
        img: "../img/product/bupbe/bupbe14.webp",
        title: "Đồ Chơi Búp Bê Đáng Yêu Cho Bé - Shenzhen 515-31 - Mẫu 2",
        price_old: 89000,
        price_sale: 80000,
        discount: "-10%",
        quantity: 0
    },
    {
        id: 115, 
        img: "../img/product/bupbe/bupbe15.webp",
        title: "Đồ Chơi Búp Bê Đáng Yêu Cho Bé - Shenzhen 515-31 - Mẫu 3",
        price_old: 89000,
        price_sale: 80000,
        discount: "-10%",
        quantity: 0
    }
];


// --- CÁC HÀM XỬ LÝ GIỎ HÀNG CHUẨN ---

function addToCart(productId) {
    var allProducts = [...gauBongList, ...bupBeList]; 
    
    var product = allProducts.find(p => p.id === productId);
    
    if (product) {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        var existingProduct = cart.find(item => item.id === productId);
        
        if (existingProduct) {
            existingProduct.quantity += 1; 
        } else {
            var productToAdd = { ...product, quantity: 1 };
            cart.push(productToAdd);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        updateCartItemCount();
        
        alert("Thêm thành công sản phẩm vào giỏ hàng!");
    } else {
        alert("Lỗi: Không tìm thấy sản phẩm!");
    }
}

// Hàm đếm số lượng để hiển thị lên icon giỏ hàng
function updateCartItemCount() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Tìm tất cả các cục badge màu vàng trên trang và cập nhật số
    var cartBadges = document.querySelectorAll('.badge.bg-warning');
    cartBadges.forEach(badge => {
        badge.textContent = totalCount;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    updateCartItemCount();
});


function renderProducts(productArray, containerId, limit = null) {
    var container = document.getElementById(containerId);
    

    if (!container) return; 


    var productsToDisplay = productArray;
    if (limit) {
        productsToDisplay = productArray.slice(0, limit);
    }

    var htmlContent = ""; 

    productsToDisplay.forEach(function(product) {
        var priceSaleFmt = product.price_sale.toLocaleString('vi-VN') + ' đ';
        var priceOldFmt = product.price_old.toLocaleString('vi-VN') + ' đ';

        htmlContent += `
            <div class="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div class="card custom-product-card h-100 shadow-sm border-0">
                    <div class="product-img-box position-relative overflow-hidden" style="border-radius: 12px 12px 0 0;">
                        <img src="${product.img}" alt="${product.title}" class="card-img-top" style="aspect-ratio: 1/1; object-fit: cover;">
                        <div class="overlay-cart">
                            <button class="btn btn-hover-cart w-100" onclick="addToCart(${product.id})">
                                <i class="bi bi-cart-plus"></i> Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column px-3 py-3">
                        <h5 class="product-title">${product.title}</h5>
                        <div class="d-flex align-items-center mb-1">
                            <span class="price-sale fw-bold me-2" style="color: #d32f2f; font-size: 18px;">${priceSaleFmt}</span>
                            <span class="badge discount-badge" style="background-color: #d32f2f;">${product.discount}</span>
                        </div>
                        <div class="price-old mt-auto">
                            <del style="color: #999; font-size: 14px;">${priceOldFmt}</del>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });


    container.innerHTML = htmlContent;
}


document.addEventListener("DOMContentLoaded", function () {
    renderProducts(gauBongList, "product-container-gaubong", 4);
    renderProducts(bupBeList, "product-container-bupbe", 4);
    renderProducts(gauBongList, "all-gaubong-container");
    renderProducts(bupBeList, "all-bupbe-container");
});