// let danhsachHistory = document.getElementById("danhSachHistory");

// function getFormData(formEL) {
//     let data = {};
//     for (element of formEL.elements) {
//         if (element.name != "") {
//             data[element.name] = element.value;
//         }
//     }
//     return data;
// }
    
// /* Lib validate */
// function validateEmail(email) {
//     var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

// /* local */
// function saveUserListToLocal(userList) {
//     localStorage.setItem("userList", JSON.stringify(userList));
// }

// /* authen account */
// function getUserLoginData() {
//     let userData = JSON.parse(localStorage.getItem("userLogin"));
//     return userData;
// }

// function handleAccountAction(action) {
//     if (action === "login") {
//         window.location.href = "index.html";
//     } else if (action === "logout") {
//         localStorage.removeItem("userLogin");
//         alert("Bạn đã đăng xuất!");
//         window.location.href = "/authen/"; // Chuyển hướng đến trang đăng nhập sau khi đăng xuất
//     }
// }

// const historyList = [
//     {
//         tienchitieu: "Tiền phòng",
//         ghichu: "Đóng tiền phòng tháng 3",
//         sotien: "2,000,000 VND"
//     },
//     {
//         tienchitieu: "Tiền điện",
//         ghichu: "Đóng tiền điện tháng 3",
//         sotien: "500,000 VND"
//     },
//     {
//         tienchitieu: "Tiền nước",
//         ghichu: "Đóng tiền nước tháng 3",
//         sotien: "300,000 VND"
//     },
//     {
//         tienchitieu: "Tiền ăn",
//         ghichu: "Mua đồ ăn cho cả tháng",
//         sotien: "1,500,000 VND"
//     },
// ];

// function themChiTieu() {
//     const soTien = document.getElementById("soTien").value;
//     const tenChiTieu = document.getElementById("tenChiTieu").value;
//     const ghiChu = document.getElementById("ghiChu").value;

//     if (!soTien || !tenChiTieu) {
//         alert("Vui lòng nhập đủ thông tin");
//         return;
//     }

//     const newItem = {
//         tienchitieu: tenChiTieu,
//         ghichu: ghiChu,
//         sotien: `${parseInt(soTien).toLocaleString()} VND`
//     };

//     const currentHistory = JSON.parse(localStorage.getItem("historyList")) || [];
//     currentHistory.push(newItem);
//     localStorage.setItem("historyList", JSON.stringify(currentHistory));

//     renderHistory(document.getElementById("danhSachHistory")); //
//     renderHistory(danhsachHistory);
// }


// function timKiem() {
//     const searchVal = document.getElementById("search").value.toLowerCase();
//     const history = JSON.parse(localStorage.getItem("historyList")) || [];

//     const filtered = history.filter(item =>
//         item.tienchitieu.toLowerCase().includes(searchVal) ||
//         item.ghichu.toLowerCase().includes(searchVal)
//     );

//     danhsachHistory.innerHTML = "";
//     filtered.forEach(item => {
//         let li = document.createElement("li");
//         li.className = "history-item";
//         li.innerHTML = `
//         <div class="history-item-content">
//             <p>${item.tienchitieu}</p>
//             <p>${item.ghichu}</p>
//             <span>${item.sotien}</span>
//         </div>
//         `;
//         danhsachHistory.appendChild(li);
//     });
// }

// function sapXepTheoGia() {
//     const history = JSON.parse(localStorage.getItem("historyList")) || [];
//     history.sort((a, b) => {
//         const giaA = parseInt(a.sotien.replace(/[^0-9]/g, ""));
//         const giaB = parseInt(b.sotien.replace(/[^0-9]/g, ""));
//         return giaA - giaB;
//     });
//     localStorage.setItem("historyList", JSON.stringify(history));
//     renderHistory(); // Gọi lại hàm renderHistory sau khi đã sắp xếp
// }


// function renderHistory() {
//     const historyList = JSON.parse(localStorage.getItem("historyList")) || [];
//     const danhSachHistory = document.getElementById("danhSachHistory");

//     // Làm mới danh sách
//     danhSachHistory.innerHTML = ""; // Xóa nội dung cũ

//     historyList.forEach((item, index) => {
//         const li = document.createElement("li");
//         li.textContent = item; // Hiển thị nội dung item
        
//         // Tạo nút "Xóa"
//         const btnXoa = document.createElement("button");
//         btnXoa.textContent = "Xóa";
//         btnXoa.style.backgroundColor = "red";
//         btnXoa.style.color = "white";
//         btnXoa.onclick = function() {
//             xoaChiTieu(index); // Gọi hàm xoaChiTieu với index
//         };

//         li.appendChild(btnXoa); // Thêm nút "Xóa" vào li
//         danhSachHistory.appendChild(li); // Thêm li vào danh sách
//     });
// }




// function xoaChiTieu(index) {
//     const currentHistory = JSON.parse(localStorage.getItem("historyList")) || [];
//     if (confirm("Bạn có chắc muốn xóa mục này không?")) {
//         currentHistory.splice(index, 1);
//         localStorage.setItem("historyList", JSON.stringify(currentHistory));
//         renderHistory();
//     }
// }
// // Khi DOM đã sẵn sàng
// document.addEventListener("DOMContentLoaded", function () {
//     // Gắn sự kiện click cho nút
//     document.getElementById("btnThemDanhMuc").addEventListener("click", themDanhMuc);
  
//     // Hiển thị danh sách đã lưu
//     hienThiDanhMuc();
//   });
  
//   function themDanhMuc() {
//     const input = document.getElementById("tenDanhMuc");
//     const ten = input.value.trim();
  
//     // Kiểm tra rỗng
//     if (ten === "") {
//       alert("Vui lòng nhập tên danh mục!");
//       return;
//     }
  
//     // Lấy danh sách cũ từ localStorage hoặc rỗng
//     const ds = JSON.parse(localStorage.getItem("danhMuc")) || [];
  
//     // Thêm danh mục mới
//     ds.push(ten);
  
//     // Lưu lại vào localStorage
//     localStorage.setItem("danhMuc", JSON.stringify(ds));
  
//     // Xóa ô input
//     input.value = "";
  
//     // Hiển thị lại danh sách
//     hienThiDanhMuc();
//   }
  
//   function hienThiDanhMuc() {
//     const danhSachUl = document.getElementById("dsDanhMuc");
//     const ds = JSON.parse(localStorage.getItem("danhMuc")) || [];
  
//     // Xóa danh sách cũ
//     danhSachUl.innerHTML = "";
  
//     // Hiển thị từng danh mục
//     ds.forEach(function (ten) {
//       const li = document.createElement("li");
//       li.textContent = ten;
//       danhSachUl.appendChild(li);
//     });
//   }
  

// document.addEventListener("DOMContentLoaded", function () {
//     danhsachHistory = document.getElementById("danhSachHistory");

//     if (!localStorage.getItem("historyList")) {
//         localStorage.setItem("historyList", JSON.stringify([]));
//     }

//     renderHistory(); // Truyền vào phần tử cần render
// });

// Khai báo phần tử toàn cục
// Lưu user
// ======= TÀI KHOẢN =======
function saveUserListToLocal(userList) {
    localStorage.setItem("userList", JSON.stringify(userList));
}

function getUserLoginData() {
    return JSON.parse(localStorage.getItem("userLogin"));
}

function handleAccountAction(action) {
    if (action === "login") {
        window.location.href = "index.html";
    } else if (action === "logout") {
        alert("Bạn đã đăng xuất!");
        setTimeout(() => {
            window.location.href = "/authen/";
        }, 300); 
    }
}

// ======= DANH MỤC =======
let indexDangSua = -1;
let danhSachDanhMuc = JSON.parse(localStorage.getItem("danhMuc")) || [];

function renderDanhMuc() {
    const danhSachUl = document.getElementById("danhSachqldm");
    if (!danhSachUl) return;
    danhSachUl.innerHTML = "";
    danhSachDanhMuc.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.ten} - Giới hạn: ${parseInt(item.gioiHan).toLocaleString()} VND
            <button onclick="batDauSua(${index})">Sửa</button>
            <button onclick="xoaDanhMuc(${index})" style="color:red;">Xóa</button>
        `;
        danhSachUl.appendChild(li);
    });
    localStorage.setItem("danhMuc", JSON.stringify(danhSachDanhMuc));
}

function themDanhMuc() {
    const ten = document.getElementById("tenDanhMuc").value.trim();
    const gioiHan = parseFloat(document.getElementById("gioiHan").value);

    if (!ten || isNaN(gioiHan) || gioiHan < 0) {
        alert("Vui lòng nhập tên danh mục và giới hạn hợp lệ!");
        return;
    }

    if (indexDangSua === -1) {
        danhSachDanhMuc.push({ ten, gioiHan });
    } else {
        danhSachDanhMuc[indexDangSua] = { ten, gioiHan };
        indexDangSua = -1;
        document.getElementById("btnThemDanhMuc").innerText = "Thêm danh mục";
    }

    document.getElementById("tenDanhMuc").value = "";
    document.getElementById("gioiHan").value = "";
    renderDanhMuc();
}

function batDauSua(index) {
    const dm = danhSachDanhMuc[index];
    document.getElementById("tenDanhMuc").value = dm.ten;
    document.getElementById("gioiHan").value = dm.gioiHan;
    document.getElementById("btnThemDanhMuc").innerText = "Cập nhật";
    indexDangSua = index;
}

function xoaDanhMuc(index) {
    if (confirm("Bạn có chắc muốn xóa danh mục này?")) {
        danhSachDanhMuc.splice(index, 1);
        renderDanhMuc();
    }
}

// ======= CHI TIÊU =======
function themChiTieu() {
    const soTien = document.getElementById("soTien").value;
    const tenChiTieu = document.getElementById("tenChiTieu").value;
    const ghiChu = document.getElementById("ghiChu").value;
    const thang = document.getElementById("month").value;

    if (!soTien || !tenChiTieu || !thang) {
        alert("Vui lòng nhập đủ thông tin");
        return;
    }

    const newItem = {
        tienchitieu: tenChiTieu,
        ghichu: ghiChu,
        sotien: `${parseInt(soTien).toLocaleString()} VND`,
        thang: thang
    };

    const currentHistory = JSON.parse(localStorage.getItem("historyList")) || [];
    currentHistory.push(newItem);
    localStorage.setItem("historyList", JSON.stringify(currentHistory));

    renderHistory();
    capNhatSoTienConLai();
    capNhatThongKe();
}


function xoaChiTieu(index) {
    const currentHistory = JSON.parse(localStorage.getItem("historyList")) || [];
    if (confirm("Bạn có chắc muốn xóa mục này không?")) {
        currentHistory.splice(index, 1);
        localStorage.setItem("historyList", JSON.stringify(currentHistory));
        renderHistory();
        capNhatSoTienConLai();
        capNhatThongKe();
    }
}

// ======= LỊCH SỬ =======
let danhsachHistory = null;
const itemsPerPage = 5;  // Số lượng giao dịch mỗi trang

function renderHistory() {
    const month = document.getElementById("month").value;
    const historyList = JSON.parse(localStorage.getItem("historyList")) || [];

    const filteredHistory = historyList.filter(i => i.thang === month);
    const totalPages = Math.ceil(filteredHistory.length / itemsPerPage); // Tính toán totalPages dựa trên dữ liệu thực tế

    // Kiểm tra nếu không có giao dịch nào trong tháng
    if (filteredHistory.length === 0) {
        const noDataMessage = document.createElement("li");
        noDataMessage.textContent = "Không có giao dịch nào trong tháng này.";
        danhsachHistory.innerHTML = ""; // Xóa danh sách trước khi hiển thị thông báo
        danhsachHistory.appendChild(noDataMessage);
        return;
    }

    // Xử lý phân trang
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedHistory = filteredHistory.slice(startIndex, startIndex + itemsPerPage);

    danhsachHistory.innerHTML = "";  // Xóa danh sách trước khi render lại
    paginatedHistory.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "history-item";
        li.innerHTML = `
            <div class="history-item-content">
                <p>${item.tienchitieu}</p>
                <p>${item.ghichu}</p>
                <span>${item.sotien}</span>
            </div>
        `;
        const btnXoa = document.createElement("button");
        btnXoa.textContent = "Xóa";
        btnXoa.style.backgroundColor = "red";
        btnXoa.style.color = "white";
        btnXoa.onclick = () => xoaChiTieu(index);
        li.appendChild(btnXoa);
        danhsachHistory.appendChild(li);
    });

    renderPagination(totalPages); // Cập nhật phân trang
}

let currentPage = 1;
const totalPages = 3;

function renderPagination(totalPages) {
    const paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = ""; // Clear previous pagination

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.classList.add("pagination-btn");
        pageButton.onclick = () => goToPage(i);

        // Add 'active' class if it's the current page
        if (i === currentPage) {
            pageButton.classList.add("active");
        }

        paginationDiv.appendChild(pageButton);
    }
}


function goToPage(page) {
  currentPage = page;
  renderPagination();
}

// function goToPage(pageNumber) {
//     currentPage = pageNumber;
//     renderHistory();  // Tải lại danh sách sau khi chọn trang
// }

// ======= TÌM KIẾM / SẮP XẾP =======
function timKiem() {
    const searchVal = document.getElementById("search").value.toLowerCase();
    const history = JSON.parse(localStorage.getItem("historyList")) || [];

    const filtered = history.filter(item =>
        item.tienchitieu.toLowerCase().includes(searchVal) ||
        item.ghichu.toLowerCase().includes(searchVal)
    );

    danhsachHistory.innerHTML = "";

    if (filtered.length === 0) {
        const noDataMessage = document.createElement("li");
        noDataMessage.textContent = "Không tìm thấy kết quả phù hợp.";
        danhsachHistory.appendChild(noDataMessage);
    } else {
        filtered.forEach(item => {
            let li = document.createElement("li");
            li.className = "history-item";
            li.innerHTML = `
            <div class="history-item-content">
                <p>${item.tienchitieu}</p>
                <p>${item.ghichu}</p>
                <span>${item.sotien}</span>
            </div>
            `;
            danhsachHistory.appendChild(li);
        });
    }
}


function sapXepTheoGia() {
    const history = JSON.parse(localStorage.getItem("historyList")) || [];
    history.sort((a, b) => {
        const giaA = parseInt(a.sotien.replace(/[^0-9]/g, ""));
        const giaB = parseInt(b.sotien.replace(/[^0-9]/g, ""));
        return giaA - giaB;
    });
    localStorage.setItem("historyList", JSON.stringify(history));
    renderHistory();
}

// ======= NGÂN SÁCH & THỐNG KÊ =======
function capNhatSoTienConLai() {
    const budget = parseInt(document.getElementById("budget").value) || 0;
    const month = document.getElementById("month").value;
    const history = JSON.parse(localStorage.getItem("historyList")) || [];
    const totalSpent = history
        .filter(i => i.thang === month)
        .reduce((sum, i) => sum + parseInt(i.sotien.replace(/[^0-9]/g, '')), 0);

    const remaining = budget - totalSpent;
    document.getElementById("remainingBudget").textContent = `${remaining.toLocaleString()} VND`;
}

function capNhatThongKe() {
    const tbody = document.querySelector(".content_container2 tbody");
    tbody.innerHTML = "";

    const history = JSON.parse(localStorage.getItem("historyList")) || [];
    const data = {};

    history.forEach(item => {
        const month = item.thang;
        const gia = parseInt(item.sotien.replace(/[^0-9]/g, ''));
        data[month] = (data[month] || 0) + gia;
    });

    for (let month in data) {
        const chi = data[month];
        const nganSach = parseInt(localStorage.getItem("budget_" + month)) || 0;
        const trangThai = chi > nganSach ? "Vượt ngân sách" : "Ổn định";

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${month}</td>
            <td>${chi.toLocaleString()} VND</td>
            <td>${nganSach.toLocaleString()} VND</td>
            <td>${trangThai}</td>
        `;
        tbody.appendChild(row);
    }
}

document.getElementById("addBudget").addEventListener("click", function (e) {
    e.preventDefault();
    const month = document.getElementById("month").value;
    const budget = document.getElementById("budget").value;
    if (!budget) {
        alert("Vui lòng nhập ngân sách!");
        return;
    }
    localStorage.setItem("budget_" + month, budget);
    capNhatSoTienConLai();
    capNhatThongKe();
});
document.getElementById("logoutBtn").addEventListener("click", function () {
    const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất không?");
    if (confirmLogout) {
        // Đúng key đang dùng để lưu dữ liệu đăng nhập
        localStorage.removeItem("userLogin");
        alert("Bạn đã đăng xuất!");
        setTimeout(() => {
            window.location.href = "../authen/login.html";
        }, 300); // Chuyển về trang đăng nhập
    }
}); 

// ======= DOM READY =======
document.addEventListener("DOMContentLoaded", function () {
    danhsachHistory = document.getElementById("danhSachHistory");

    if (!localStorage.getItem("historyList")) {
        localStorage.setItem("historyList", JSON.stringify([]));
    }

    renderDanhMuc();
    renderHistory();
    capNhatSoTienConLai();
    capNhatThongKe();
    renderPagination();
});


