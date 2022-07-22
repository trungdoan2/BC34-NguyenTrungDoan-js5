function tinhDiem( a, b, c ) {
    var tongDiem = a + b + c;
    var diemChuan = document.getElementById ("diemChuan").value *1;
    var khuVuc = document.getElementById ('khuVuc').value;
    var doiTuong = document.getElementById ('doiTuong').value;

     if (khuVuc = "A" && doiTuong == 1) {
        tongDiem = tongDiem + 2 + 2.5;
     }else if (khuVuc = "A" && doiTuong == 2) {
        tongDiem = tongDiem + 2 + 1.5;
     }else if (khuVuc = "A" && doiTuong == 3) {
        tongDiem = tongDiem + 2 + 1;
     }else if (khuVuc = "B" && doiTuong == 1) {
        tongDiem = tongDiem + 1 + 2.5;
     }else if (khuVuc = "B" && doiTuong == 2) {
        tongDiem = tongDiem + 1 + 1.5;
     }else if (khuVuc = "B" && doiTuong == 3) {
        tongDiem = tongDiem + 1 + 1;
     }else if (khuVuc = "C" && doiTuong == 1) {
        tongDiem = tongDiem + 0.5 + 2.5;
     }else if (khuVuc = "C" && doiTuong == 2) {
        tongDiem = tongDiem + 0.5 + 1.5;
     }else if (khuVuc = "C" && doiTuong == 3) {
        tongDiem = tongDiem + 0.5 + 1;
     }else if (khuVuc = "A" ) {
        tongDiem = tongDiem + 2;
     }else if (khuVuc = "B" ) {
        tongDiem = tongDiem + 1;
     }else if (khuVuc = "C" ) {
        tongDiem = tongDiem + 0.5;
    }else if (doiTuong == 1 ) {
        tongDiem = tongDiem + 2.5;
     }else if (doiTuong == 2 ) {
        tongDiem = tongDiem + 2;
     }else if (doiTuong == 3 ) {
        tongDiem = tongDiem + 1.5;
    }  if (tongDiem >= diemChuan) {
        ketQua = "<p>Bạn đã đậu.Tổng điểm "+ tongDiem +"</p>"
    }else if (a == 0 ||b == 0 ||c ==0) {
        ketQua = "<p>Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0</p>"
    }else {
        ketQua = "<p>Bạn đã rớt.Tổng điểm "+ tongDiem +"</p>"
    }
    return tongDiem;

}


document.getElementById ("btnDiem").onclick = function () {
    var monThu1 = document.getElementById ('monThu1').value *1;
    var monThu2 = document.getElementById ('monThu2').value *1;
    var monThu3 = document.getElementById ('monThu3').value *1;
    var sum = tinhDiem(monThu1, monThu2, monThu3);


    document.getElementById ("thongBaoDiem").innerHTML = ketQua;
}


function tinhTienDien( y) {
    var hoTen = document.getElementById ('hoTen').value;
    var tienDien = "";

    if (y < 0) {
        ketQua = "<p>Số kw không hợp lệ vui lòng nhập lại</p>"
    }else if ( y <= 50) {
        tienDien = y * 500;
    }else if (  50 < y <= 100) {
        tienDien =  (50 * 500) +  ((y - 50) * 650);
     
    }else if (  100 < y <= 200) {
        tienDien = (50 * 500) +  (50 * 650) + (( y - 100)* 850);
    }else if (  200 < y <= 350) {
        tienDien = (50 * 500) +  (50 * 650) + ( 100* 850) + (( y - 200) * 1100);
       
    }else if (  y > 350) {
        tienDien = (50 * 500) +  (50 * 650) + ( 100* 850) + (150 * 1100) + (( y - 350) * 1300);
        
    }if (y < 0) {
        ketQua = "<p>Số kw không hợp lệ vui lòng nhập lại</p>"
    } else {
        ketQua = "<p>Họ tên: "+ hoTen +";Tiền điện: " +tienDien +"</p>"
    }
    return tienDien;


}











document.getElementById ('btnTienDien').onclick = function () {
   
    var soKw = document.getElementById ('soKw').value * 1;

    var elec = tinhTienDien(soKw);


document.getElementById ('thongBaoTienDien').innerHTML = ketQua;
}

function tinhThue(v,p,m) {
   
    var m= v - 4000000 - p * 1600000;
    var tienThue = "";
    if ( m <= 60000000) {
        tienThue = (m * 0.05);
    }else if (   60000000< m <=120000000) {
        tienThue =  (60000000 * 0.05) + ((m-60000000)*0.1);
    }else if (   120000000 < m <= 210000000) {
        tienThue =  (60000000 * 0.05) + ( 60000000 * 0.1) + ((m - 120000000) * 0.15);
    }else if (   210000000 < m <= 384000000) {
        tienThue =  (60000000 * 0.05) + ( 60000000 * 0.1) + (90000000 * 0.15) + ((m - 210000000) * 0.2);
    }else if (   384000000 < m <= 624000000 ) {
        tienThue =  (60000000 * 0.05) + ( 60000000 * 0.1) + (90000000 * 0.15) + (174000000 * 0.2) + ((m - 384000000 ) * 0.25);
    }else if (   624000000 < m <= 960000000 ) {
        tienThue =  (60000000 * 0.05) + ( 60000000 * 0.1) + (90000000 * 0.15) + (174000000 * 0.2) + ( 240000000 * 0.25) + ((m - 624000000)*0.3);
    }else if (    m > 960000000 ) {
        tienThue =  (60000000 * 0.05) + ( 60000000 * 0.1) + (90000000 * 0.15) + (174000000 * 0.2) + ( 240000000 * 0.25) + (336000000 * 0.3) + ((m - 960000000)*0.35);
    }if (m < 0) {
        ketQua = "<p>Vui lòng nhập lại tổng thu nhập</p>"
    }else {
        ketQua = "<P>Tiền thuế thu nhập cá nhân: "+ tienThue +"</p>"
    }
}

document.getElementById('btnTinhThue').onclick = function () {
   
    var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    var thuNhapChiuThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
    var thue = tinhThue(tongThuNhap, nguoiPhuThuoc, thuNhapChiuThue);

    document.getElementById('thongBaoThue').innerHTML = ketQua;
}
    
function tinhTienCap(x,f) {
    var doanhNghiep = document.getElementById ("doanhNghiep").value;
    var caNhan = document.getElementById ("caNhan").value
    var maKhachHang = document.getElementById ("maKhachHang").value;
     var tongTien = "";
     
     if ( doanhNghiep == "D" && f > 10) {
        tongTien = 15 + ( x * 50 ) + (75 + (5 * ( f - 10)))
     } else if (doanhNghiep == "D" && f <=10) {
        tongTien = 15 + ( x * 50 ) + 75 
     }  else if (caNhan == "N" ) {
        tongTien = 15 + ( x * 7.5 ) + 20.5; 
     }if (doanhNghiep != "D" && caNhan != "N") {
        ketQua = "<p>Vui lòng chọn loại khách hàng</p>"
     }else {
        ketQua = "<p>mã khách hàng: "+ maKhachHang +";Tiền cáp "+ tongTien +"</p>"
     }

}

document.getElementById ("btnTienCap").onclick = function () {
    var soKenhCaoCap = document.getElementById ("soKenhCaoCap").value * 1;
    var soKetNoi = document.getElementById ("soKetNoi").value * 1;
  var sum = tinhTienCap(soKenhCaoCap,soKetNoi)
  

    document.getElementById('thongBaoTienCap').innerHTML = ketQua;
}





