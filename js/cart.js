
document.getElementById("showcart").style.display="none";
var giohang = new Array();
function themvaogiohang(x){
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong = boxsp[3].value;
    var sp = new Array(hinh,gia,tensp,soluong);
    giohang.push(sp);
    console.log(giohang);
    showcountsp();
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
}
function showcountsp(){
    document.getElementById("countsp").innerHTML = giohang.length;
}
function xoasp(x){
    var tr = x.parentElement.parentElement;
    var tensp  = tr.children[2].innerText;
    tr.remove();
    for (let i = 0; i < giohang.length; i++){
        if(giohang[i][2]==tensp){
            giohang.splice(i, 1);
        }
    }
    showmycart();
    showcountsp();
   
}
function xoaall(){
 giohang = [];
 showmycart();
 showcountsp();
}

function showmycart(){
    var ttgh = "";
    var tong = 0;
   
    for(let i = 0; i < giohang.length; i++){
        var tt = parseInt(giohang[i][1])*parseInt(giohang[i][3]);
        tong += tt;
        ttgh+= ' <tr>'+
        '<td>'+(i+1)+'</td>'+
       ' <td><img src="'+giohang[i][0]+'" alt=""></td>'+
       ' <td>'+giohang[i][2]+'</td>'+
        '<td>'+giohang[i][1]+'</td>'+
        '<td>'+giohang[i][3]+'</td>'+
        '<td>'+
            '<div>'+tt+'</div>'+
        '</td>'+
        '<td>'+
            '<button onclick="xoasp(this)">Xóa</button>'+
        '</td>'+
        '</tr>';
   
    }
    ttgh +=  '</tr>'+
    '<tr>'+
        '<th colspan="6">Tổng đơn hàng</th>'+
        '<th>'+
        '<div>'+tong+'</div>'+
        '</th>'+
    '</tr>';
    document.getElementById("mycart").innerHTML =ttgh;
   
}
function showcart(){
    
    var x = document.getElementById("showcart");
    if (x.style.display ==  "block"){
        x.style.display = "none";
    }
    else{
        x.style.display ="block";
    }
    showmycart();
}
function showgiohang_thanhtoan(){
var  gh = sessionStorage.getItem("giohang");
var giohang = JSON.parse(gh);
var ttgh = "";
var tong = 0;

for(let i = 0; i < giohang.length; i++){
    var tt = parseInt(giohang[i][1])*parseInt(giohang[i][3]);
    tong += tt;
    ttgh+= ' <tr>'+
    '<td>'+(i+1)+'</td>'+
   ' <td><img src="'+giohang[i][0]+'" alt=""></td>'+
   ' <td>'+giohang[i][2]+'</td>'+
    '<td>'+giohang[i][1]+'</td>'+
    '<td>'+giohang[i][3]+'</td>'+
    '<td>'+
        '<div>'+tt+'</div>'+
    '</td>'+
    '</tr>';

}
ttgh +=  '</tr>'+
'<tr>'+
    '<th colspan="5">Tổng đơn hàng</th>'+
    '<th>'+
    '<div>'+tong+'</div>'+
    '</th>'+
'</tr>';
document.getElementById("mycart").innerHTML =ttgh;

}
function dongydathang(){
    var ttnh = document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[1].children[0].value;
    var diachi = ttnh[1].children[1].children[0].value;
    var dienthoai = ttnh[2].children[1].children[0].value;
    var email = ttnh[3].children[1].children[0].value;
    var nguoinhan = new Array(hoten,diachi,dienthoai,email);
    console.log(nguoinhan);
    sessionStorage.setItem("nguoinhan",JSON.stringify(nguoinhan));
    window.location.assign("donhang.html")
    
}
function showttnn(){
    var nguoinhan = sessionStorage.getItem("nguoinhan");
    var tt = JSON.parse(nguoinhan);
    var tt =  '<tr>'+
    '<td>Họ tên</td>'+
    '<td>'+tt[0]+'</td>'+
    '<br>'+
'</tr>'+
'<tr>'+
    '<td>Địa chỉ</td>'+
    '<td>'+tt[1]+'</td>'+
    '<br>'+
'</tr>'+
'<tr>'+
    '<td>Điện thoại</td>'+
    '<td>'+tt[2]+'</td>'+
    '<br>'+
'</tr>'+
'<tr>'+
    '<td>Email</td>'+
    '<td>'+tt[3]+'</td>'+
    '<br>'+
'</tr>';
document.getElementById("thongtinnhanhang").innerHTML =tt;
}

function tinhlaidon(x) {
var gh_str = sessionStorage.getItem("sp");
var giohang = JSON.parse(gh_str);
var tr = x.parentElement.parentElement;
var dg = parseInt(tr.children[3].innerHTML);
var tt = 0;
var sl = Number(tr.children[4].children[0].value);
var td = document.getElementById("tongtien").innerHTML;
console.log(td);
var tongdon = 0;
// console.log(sl);

var tensp = tr.children[2].innerText;
if (sl == null) {
dongy = confirm("xóa sản phẩm khỏi giỏ hàng. OK?");
// Xoa tren giao dien
if (dongy == true)
tr.remove();
// Xoa sp khoi mang
for (let i = 0; i < giohang.length; i++) {
if (giohang[i][1] == tensp) {
giohang.splice(i, 1);
}
console.log(...giohang);
}
} else {
for (let i = 0; i < giohang.length; i++) {
if (giohang[i][1] == tensp) {
giohang[i][3] = Number(sl);
}
}
tt = Number(dg) * Number(sl);
tr.children[5].innerHTML = tt;
}
var h = document.querySelectorAll("#tt");
for (let i = 0; i < h.length; i++) {
tongdon += Number(h[i].innerText);
}
document.getElementById("tongtien").innerText = tongdon;
sessionStorage.setItem("sp", JSON.stringify(giohang));
}
function stt(){
var stt = document.querySelectorAll("#stt");
for(var i=0;i<stt.length;i++){
stt[i].innerText=(i+1);
}
}