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
// ======= Quản lý tài khoản =======
function handleAccountAction(action) {
    if (action === "login") {
        window.location.href = "index.html";
    } else if (action === "logout") {
        alert("Bạn đã đăng xuất!");
        localStorage.removeItem("userLogin");
        window.location.href = "/authen/";
    }
}

// ======= Biến toàn cục =======
let danhSachDanhMuc = JSON.parse(localStorage.getItem("danhMuc")) || [];
let historyList = JSON.parse(localStorage.getItem("historyList")) || [];
let indexDangSuaDanhMuc = -1;
let indexDangSuaChiTieu = -1;
//let currentPage = 1;
const itemsPerPage = 5;

// ======= Quản lý danh mục =======
function renderDanhMuc() {
    const danhSachUl = document.getElementById("danhSachqldm");
    danhSachUl.innerHTML = "";
    danhSachDanhMuc.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.ten} - Giới hạn: ${parseInt(item.gioiHan).toLocaleString()} VND
            <button onclick="batDauSuaDanhMuc(${index})" class="btn btn-sm btn-primary">Sửa</button>
            <button onclick="xoaDanhMuc(${index})" class="btn btn-sm btn-danger">Xóa</button>
        `;
        danhSachUl.appendChild(li);
    });
    localStorage.setItem("danhMuc", JSON.stringify(danhSachDanhMuc));
}

function themDanhMuc() {
    const ten = document.getElementById("tenDanhMuc").value.trim();
    const gioiHan = parseFloat(document.getElementById("gioiHan").value);
    if (!ten || isNaN(gioiHan) || gioiHan <= 0) {
        alert("Vui lòng nhập tên danh mục và giới hạn hợp lệ!");
        return;
    }
    if (indexDangSuaDanhMuc === -1) {
        danhSachDanhMuc.push({ ten, gioiHan });
    } else {
        danhSachDanhMuc[indexDangSuaDanhMuc] = { ten, gioiHan };
        indexDangSuaDanhMuc = -1;
        document.getElementById("btnThemDanhMuc").innerText = "Thêm danh mục";
    }
    document.getElementById("tenDanhMuc").value = "";
    document.getElementById("gioiHan").value = "";
    renderDanhMuc();
}

function batDauSuaDanhMuc(index) {
    const dm = danhSachDanhMuc[index];
    document.getElementById("tenDanhMuc").value = dm.ten;
    document.getElementById("gioiHan").value = dm.gioiHan;
    document.getElementById("btnThemDanhMuc").innerText = "Cập nhật";
    indexDangSuaDanhMuc = index;
}

function xoaDanhMuc(index) {
    if (confirm("Bạn có chắc muốn xóa danh mục này không?")) {
        danhSachDanhMuc.splice(index, 1);
        renderDanhMuc();
    }
}

// ======= Quản lý chi tiêu =======
function themChiTieu() {
    const soTien = document.getElementById("soTien").value;
    const tenChiTieu = document.getElementById("tenChiTieu").value;
    const ghiChu = document.getElementById("ghiChu").value;
    const thang = document.getElementById("month").value;
    if (!soTien || !tenChiTieu || !thang) {
        alert("Vui lòng nhập đủ thông tin chi tiêu!");
        return;
    }
    const newItem = {
        tienchitieu: tenChiTieu,
        ghichu: ghiChu,
        sotien: `${parseInt(soTien).toLocaleString()} VND`,
        thang: thang
    };
    historyList.push(newItem);
    localStorage.setItem("historyList", JSON.stringify(historyList));
    checkVuotGioiHanDanhMuc(newItem);
    capNhatSoTienConLai();
    capNhatThongKe();
    renderHistory();
}

function capNhatChiTieu() {
    if (indexDangSuaChiTieu !== -1) {
        const soTien = document.getElementById("soTien").value;
        const tenChiTieu = document.getElementById("tenChiTieu").value;
        const ghiChu = document.getElementById("ghiChu").value;
        const thang = document.getElementById("month").value;
        historyList[indexDangSuaChiTieu] = {
            tienchitieu: tenChiTieu,
            ghichu: ghiChu,
            sotien: `${parseInt(soTien).toLocaleString()} VND`,
            thang: thang
        };
        indexDangSuaChiTieu = -1;
        localStorage.setItem("historyList", JSON.stringify(historyList));
        capNhatSoTienConLai();
        capNhatThongKe();
        renderHistory();
    } else {
        themChiTieu();
    }
}

function batDauSuaChiTieu(index) {
    const item = historyList[index];
    document.getElementById("soTien").value = parseInt(item.sotien.replace(/[^0-9]/g, ''));
    document.getElementById("tenChiTieu").value = item.tienchitieu;
    document.getElementById("ghiChu").value = item.ghichu;
    indexDangSuaChiTieu = index;
    window.scrollTo(0, 0);
}

function xoaChiTieu(index) {
    if (confirm("Bạn có chắc chắn muốn xóa giao dịch này không?")) {
        historyList.splice(index, 1);
        localStorage.setItem("historyList", JSON.stringify(historyList));
        capNhatSoTienConLai();
        capNhatThongKe();
        renderHistory();
    }
}

function checkVuotGioiHanDanhMuc(giaoDichMoi) {
    const danhMuc = danhSachDanhMuc.find(dm => dm.ten.toLowerCase() === giaoDichMoi.tienchitieu.toLowerCase());
    if (danhMuc) {
        const tongChi = historyList.filter(i => i.tienchitieu.toLowerCase() === danhMuc.ten.toLowerCase() && i.thang === giaoDichMoi.thang)
            .reduce((sum, i) => sum + parseInt(i.sotien.replace(/[^0-9]/g, '')), 0);
        if (tongChi > danhMuc.gioiHan) {
            alert(`⚠️ Danh mục "${danhMuc.ten}" đã vượt giới hạn: ${tongChi.toLocaleString()} / ${danhMuc.gioiHan.toLocaleString()} VND`);
        }
    }
}

// ======= Lịch sử giao dịch =======
function renderHistory() {
    const danhSachHistory = document.getElementById("danhSachHistory");
    const month = document.getElementById("month").value;
    const filtered = historyList.filter(i => i.thang === month);
    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    danhSachHistory.innerHTML = "";
    paginated.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center"; 
        li.innerHTML = `
            <span>${item.tienchitieu} - ${item.ghichu}: ${item.sotien}</span>
            <button onclick="xoaChiTieu(${start + index})" class="btn btn-sm btn-danger">Xóa</button>
        `;
        danhSachHistory.appendChild(li);
    });

    updateActivePage();
}

// function renderHistory() {
//     const danhSachHistory = document.getElementById("danhSachHistory");
//     const month = document.getElementById("month").value;
//     const filtered = historyList.filter(i => i.thang === month);
//     const totalPages = Math.ceil(filtered.length / itemsPerPage);

//     const start = (currentPage - 1) * itemsPerPage;
//     const paginated = filtered.slice(start, start + itemsPerPage);

//     danhSachHistory.innerHTML = "";
//     paginated.forEach((item, index) => {
//         const li = document.createElement("li");
//         li.className = "list-group-item d-flex justify-content-between align-items-center";
//         li.innerHTML = `
//             <div>
//                 <b>${item.tienchitieu}</b><br/>
//                 ${item.ghichu}<br/>
//                 ${item.sotien}
//             </div>
//             <div>
                
//                 <button onclick="xoaChiTieu(${start + index})" class="btn btn-sm btn-danger">Xóa</button>
//             </div>
//         `;
//         danhSachHistory.appendChild(li);
//     });
// }
let currentPage = 1;

function goToPage(page) {
    currentPage = page;
    renderHistory();
    updateActivePage();
}


function goPrevious() {
    if (currentPage > 1) {
        currentPage--;
        renderHistory();
        updateActivePage();
    }
}

function goNext() {
    if (currentPage < 3) {
        currentPage++;
        renderHistory();
        updateActivePage();
    }
}

function updateActivePage() {
    const pageItems = document.querySelectorAll('#pagination .page-item');

    // Xóa hết active cũ
    pageItems.forEach(item => {
        item.classList.remove('active');
    });

    // Gắn active mới cho nút số trang
    if (currentPage >= 1 && currentPage <= 3) {
        pageItems[currentPage].classList.add('active');
    }
}


// ======= Tìm kiếm và sắp xếp =======
function timKiem() {
    const searchVal = document.getElementById("search").value.toLowerCase();
    const month = document.getElementById("month").value;
    const result = historyList.filter(i =>
        i.thang === month && (
            i.tienchitieu.toLowerCase().includes(searchVal) ||
            i.ghichu.toLowerCase().includes(searchVal)
        )
    );
    currentPage = 1;
    historyList = result;
    renderHistory();
}

function sapXepTheoGia() {
    historyList.sort((a, b) => parseInt(a.sotien.replace(/[^0-9]/g, '')) - parseInt(b.sotien.replace(/[^0-9]/g, '')));
    renderHistory();
}

// ======= Ngân sách và thống kê =======
function capNhatSoTienConLai() {
    const month = document.getElementById("month").value;
    const nganSach = parseInt(localStorage.getItem("budget_" + month)) || 0;
    const totalChi = historyList.filter(i => i.thang === month)
        .reduce((sum, i) => sum + parseInt(i.sotien.replace(/[^0-9]/g, '')), 0);
    document.getElementById("remainingBudget").textContent = `${(nganSach - totalChi).toLocaleString()} VND`;
}

function capNhatThongKe() {
    const tbody = document.querySelector(".content_container2 tbody");
    tbody.innerHTML = "";

    const data = {};
    historyList.forEach(item => {
        const month = item.thang;
        const gia = parseInt(item.sotien.replace(/[^0-9]/g, ''));
        data[month] = (data[month] || 0) + gia;
    });

    for (let month in data) {
        const chi = data[month];
        const nganSach = parseInt(localStorage.getItem("budget_" + month)) || 0;
        const trangThai = chi > nganSach ? "Vượt ngân sách" : "Đạt";
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

// ======= Sự kiện =======
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

document.getElementById("month").addEventListener("change", function () {
    currentPage = 1;
    renderHistory();
    capNhatSoTienConLai();
    capNhatThongKe();
});

document.addEventListener("DOMContentLoaded", function () {
    renderDanhMuc();
    renderHistory();
    capNhatSoTienConLai();
    capNhatThongKe();
});
