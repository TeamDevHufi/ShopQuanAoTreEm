var giohang = new Array();
function themvaogiohang(x)
{
    // Nhận giá trị 
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].src;
    var ten = boxsp[1].innerText;
    var gia = boxsp[2].children[0].innerText;
    var sl = parseInt(boxsp[3].value);
    //cho vào mảng
    var sp = new Array(hinh, ten, gia, sl);
    // kiểm tra trong giỏ hàng
    var kt=0;
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1]== ten){
            kt=1;
            sl+=parseInt(giohang[i][3]);
            giohang[i][3]=sl
            break;
        }
    } 
    if(kt ==0){
        // thêm mới-add to cart
        giohang.push(sp);
    }
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
}

function Luugiohang()
{
    var gh = sessionStorage.getItem("giohang");
    giohang = JSON.parse(gh);
    if(giohang == null)
    {
        giohang= new Array();
    }
}

function showmycard(){
    var tt=""
    var tong = 0;
    for (let i =0; i<giohang.length; i++)
    {
        var thanhtien = giohang[i][2] * giohang[i][3];
        tong += thanhtien;
        tt+='<tr>'+
            '<td>'+(i + 1)+'</td>'+
            '<td><img src= "'+giohang[i][0]+'" alt="" style="height: 150px;width: 150px;"></td>'+
            '<td>'+giohang[i][1]+'</td>'+
            '<td>'+giohang[i][2]+'</td>'+
            '<td>'+giohang[i][3]+'</td>'+
            '<td>'+
                '<div>'+thanhtien+'</div>'+
            '</td>'+
            '</tr>';
    }
    tt+= '<tr>'+
    '<th colspan="5">Tổng đơn hàng</th>'+
     '<th>'+
         '<div>'+tong+'</div>'+
     '</th>'+
     '</tr>';
     document.getElementById("mycart").innerHTML = tt;
}


function showgiohang_tranggiohang(){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var tt=""
    var tong = 0;
    for (let i =0; i<giohang.length; i++)
    {
        var thanhtien = giohang[i][2] * giohang[i][3];
        tong += thanhtien;
        tt+='<tr>'+
            '<td>'+(i + 1)+'</td>'+
            '<td><img src= "'+giohang[i][0]+'" alt="" style="height: 150px;width: 150px;"></td>'+
            '<td>'+giohang[i][1]+'</td>'+
            '<td>'+giohang[i][2]+'</td>'+
            '<td>'+giohang[i][3]+'</td>'+
            '<td>'+
                '<div>'+thanhtien+'.000</div>'+
            '</td>'+
            '<td>'+
                '<button onclick="xoagiohang(this)" style="color: aliceblue; background-color: black; ">Xóa </button>'+
            '</td>'+
            '</tr>';
    }
    tt+= '<tr>'+
    '<th colspan="5">Tổng đơn hàng</th>'+
     '<th>'+
         '<div>'+tong+'.000</div>'+
     '</th>'+
     '</tr>';
     document.getElementById("mycart").innerHTML = tt;
}

function xoagiohang(x){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[2].innerText;
    var gia =  tr.children[3].innerText;
    var sl =  tr.children[4].innerText;
    
    tr.remove();
    for (let i = 0; i < giohang.length; i++) {
        if(giohang[i][1]==tensp && giohang[i][2]==gia && giohang[i][3]==sl ){
            giohang.splice(i,1);
        }
    }
    LessionStorage.setItem("giohang", JSON.stringify(giohang));
    showgiohang_tranggiohang();
}

function xoatatca(x){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    giohang = [];
    Luu= sessionStorage.setItem("giohang", JSON.stringify(giohang));
    showgiohang_tranggiohang();
}
