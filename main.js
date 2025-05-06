
// ======= Quản lý tài khoản =======
const username = localStorage.getItem("userLogin");
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
function timKiemGiaoDich() {
    const tuKhoa = document.getElementById("searchInput").value.trim().toLowerCase();
    const month = document.getElementById("month").value;

    let ketQua = historyList.filter(i => i.thang === month);

    if (tuKhoa !== "") {
        ketQua = ketQua.filter(i =>
            i.tienchitieu.toLowerCase().includes(tuKhoa) ||
            i.ghichu.toLowerCase().includes(tuKhoa) ||
            i.sotien.toLowerCase().includes(tuKhoa)
        );
    }

    // render kết quả tìm kiếm
    renderHistoryList(ketQua);
}
function renderHistoryList(list) {
    const danhSachHistory = document.getElementById("danhSachHistory");
    danhSachHistory.innerHTML = "";

    list.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.tienchitieu}</strong> - ${item.sotien} <br/>
            Ghi chú: ${item.ghichu}
            <button class="btn btn-sm btn-danger" onclick="xoaChiTieu(${index})">Xóa</button>
        `;
        danhSachHistory.appendChild(li);
    });
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
