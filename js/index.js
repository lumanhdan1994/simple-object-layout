var person1={
    name:"",
    job: "",

    luottheoDoi:0,
    soluongBan: 0,
    luotthaTim: 0,
    flag_thatim : true,
    flag_ketban : true,
    tinhtrangThaTim:"Thả tim",
    yeucauKetBan: "Kết bạn",
    avatar: ""
    // CÁCH 1: 
    // TangLuot: function(){

    // }
}
// CÁCH 2: HAY DÙNG
person1.ThayDoiLuot = function(){
    // Tang Luot
    if( person1.flag_thatim === true){
        person1.luotthaTim += 1;
        person1.flag_thatim = false;
        person1.tinhtrangThaTim = "Đã thả tim";
    }
    // Giam Luot
    else{
        person1.luotthaTim -= 1;
        person1.flag_thatim = true;
        person1.tinhtrangThaTim = "Thả tim";
    }
    return person1.luotthaTim;
}
person1.GuiYeuCauKetBan = function(){
    if(person1.flag_ketban === true){
        person1.luottheoDoi += 1;
        person1.flag_ketban = false;
        person1.yeucauKetBan = "Đã gửi yêu cầu";
    }else{
        person1.luottheoDoi -= 1;
        person1.flag_ketban = true;
        person1.yeucauKetBan = "Kết bạn";
    }
    return person1.luottheoDoi;
}


var person2={
    name:"Lư Mạnh Đan",
    job: "Supply-Tikier",

    luottheoDoi:1,
    soluongBan: 123,
    luotthaTim: 0,
    flag_thatim : true,
    flag_ketban : true,
    tinhtrangThaTim:"Thả tim",
    yeucauKetBan: "Kết bạn",
    avatar: "img/user2.jpg"

}
person2.ThayDoiLuot = function(){
    // Tang Luot
    if( person2.flag_thatim === true){
        person2.luotthaTim += 1;
        person2.flag_thatim = false;
        person2.tinhtrangThaTim = "Đã thả tim";
    }
    // Giam Luot
    else{
        person2.luotthaTim -= 1;
        person2.flag_thatim = true;
        person2.tinhtrangThaTim = "Thả tim";
    }
    return person2.luotthaTim;
}
person2.GuiYeuCauKetBan = function(){
    if(person2.flag_ketban === true){
        person2.luottheoDoi += 1;
        person2.flag_ketban = false;
        person2.yeucauKetBan = "Đã gửi yêu cầu";
    }else{
        person2.luottheoDoi -= 1;
        person2.flag_ketban = true;
        person2.yeucauKetBan = "Kết bạn";
    }
    return person2.luottheoDoi;
}


var person3={
    name:"Nguyễn A",
    job: "lolsf",

    luottheoDoi:1234,
    soluongBan: 124234,
    luotthaTim: 12312,
    flag_thatim : true,
    flag_ketban : true,
    tinhtrangThaTim:"Thả tim",
    yeucauKetBan: "Kết bạn",
    avatar: "img/user3.jpg"
}
person3.ThayDoiLuot = function(){
    // Tang Luot
    if( person3.flag_thatim === true){
        person3.luotthaTim += 1;
        person3.flag_thatim = false;
        person3.tinhtrangThaTim = "Đã thả tim";
    }
    // Giam Luot
    else{
        person3.luotthaTim -= 1;
        person3.flag_thatim = true;
        person3.tinhtrangThaTim = "Thả tim";
    }
    return person3.luotthaTim;
}
person3.GuiYeuCauKetBan = function(){
    if(person3.flag_ketban === true){
        person3.luottheoDoi += 1;
        person3.flag_ketban = false;
        person3.yeucauKetBan = "Đã gửi yêu cầu";
    }else{
        person3.luottheoDoi -= 1;
        person3.flag_ketban = true;
        person3.yeucauKetBan = "Kết bạn";
    }
    return person3.luottheoDoi;
}


var person4={
    name:"Nguyễn B",
    job: "lolsf",

    luottheoDoi:2,
    soluongBan: 12313,
    luotthaTim: 234,
    flag_thatim : true,
    flag_ketban: true,
    tinhtrangThaTim:"Thả tim",
    yeucauKetBan: "Kết bạn",
    avatar: "img/user4.jpg"
}
person4.ThayDoiLuot = function(){
    // Tang Luot
    if( person4.flag_thatim === true){
        person4.luotthaTim += 1;
        person4.flag_thatim = false;
        person4.tinhtrangThaTim = "Đã thả tim";
    }
    // Giam Luot
    else{
        person4.luotthaTim -= 1;
        person4.flag_thatim = true;
        person4.tinhtrangThaTim = "Thả tim";
    }
    return person4.luotthaTim;
}
person4.GuiYeuCauKetBan = function(){
    if(person4.flag_ketban === true){
        person4.luottheoDoi += 1;
        person4.flag_ketban = false;
        person4.yeucauKetBan = "Đã gửi yêu cầu";
    }else{
        person4.luottheoDoi -= 1;
        person4.flag_ketban = true;
        person4.yeucauKetBan = "Kết bạn";
    }
    return person4.luottheoDoi;
}

var arrPerson = [person1, person2, person3, person4];

LayThongTin();

// lay thong tin
function LayThongTin(){
    person1.name = dom("#tenNguoiDung")[0].innerHTML;
    person1.job = dom("#ngheNghiep")[0].innerHTML;
    person1.luottheoDoi = parseInt(dom("#soLuotTheoDoi")[0].innerHTML);
    person1.soluongBan = parseInt(dom("#soLuongBanBe")[0].innerHTML);
    person1.luotthaTim = parseInt(dom("#soLuotThaTim")[0].innerHTML);
    person1.avatar = dom("#avatar")[0].src;
}
// DOM
function dom(tenthe){
    return document.querySelectorAll(tenthe);  
}
var lua_chon=0; // Biến đánh dấu person đc chọn ngẫu nhiên
//Thay Đổi Tình Trạng Thả Tim
dom(".btn")[1].addEventListener("click", function(){
    dom("#soLuotThaTim")[0].innerHTML = arrPerson[lua_chon].ThayDoiLuot();
    dom(".btn")[1].innerHTML = arrPerson[lua_chon].tinhtrangThaTim;
})

//Thay Đổi Tình Trạng Kết Bạn
dom(".btn")[0].addEventListener("click", function(){
    dom("#soLuotTheoDoi")[0].innerHTML = arrPerson[lua_chon].GuiYeuCauKetBan();
    dom(".btn")[0].innerHTML = arrPerson[lua_chon].yeucauKetBan;
})

// chức năng next
dom(".btn")[2].addEventListener("click", function(){
    var randomNumber = Math.floor((Math.random()*4)); // hàm lấy ngẫu nhiên 0-3 // Math.floor (hàm làm tròn xuống)
    dom("#avatar")[0].src = arrPerson[randomNumber].avatar;
    dom("#tenNguoiDung")[0].innerHTML = arrPerson[randomNumber].name;
    dom("#ngheNghiep")[0].innerHTML = arrPerson[randomNumber].job;
    dom("#soLuotTheoDoi")[0].innerHTML = arrPerson[randomNumber].luottheoDoi;
    dom("#soLuongBanBe")[0].innerHTML = arrPerson[randomNumber].soluongBan;
    dom("#soLuotThaTim")[0].innerHTML = arrPerson[randomNumber].luotthaTim;
    dom(".btn")[1].innerHTML = arrPerson[randomNumber].tinhtrangThaTim;
    dom(".btn")[0].innerHTML = arrPerson[randomNumber].yeucauKetBan;
    lua_chon = randomNumber;
})
