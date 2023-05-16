function checkseri(){
    let seri = document.getElementById('seri').value
    let err = document.querySelector('.err')
    let regex = /[A-Z0-9_]{6,}/i

    if(seri == null || seri ==""){
        err.innerHTML = 'Không được trống'
    }else if(!regex.test(seri)){
        err.innerHTML ='Không đúng định dạng'
    }else{
        err.innerHTML = ''
        return true
    }
        return false
}
function checkmota(){
    let motaa = document.getElementById('mota').value
    let err1 = document.querySelector('.err1')
     if(motaa == null || motaa ==""){
        err1.innerHTML = 'bắt buộc nhập dữ liệu không được để trống'
    }else{
        err1.innerHTML = ''
        return true
    }
    return false
}
function checktrongluong(){
    let tl = document.getElementById('trongluong').value
    var tl1 = Number(tl)
    let err3 = document.querySelector('.err3')

    if(tl == null || tl ==""){
        err3.innerHTML = 'bắt buộc nhập dữ liệu không được để trống'
    }else if(tl1<= 0){
        err3.innerHTML = 'du lieu phai lon hon 0'
        return false;
    }else{
        err3.innerHTML = ""
        return true
    }
}
//
function checkphi(){
    let phiaa = document.getElementById('phi')
    
    let tronglg = document.getElementById('trongluong')
    let trong = parseFloat(tronglg.value)
    let phia

    if(trong >=1 && trong <=20  ){
        phia = trong *35000
    }else if(trong >=21 && trong <=50  ){
        phia = trong * 30000
     }else if(trong >50  ){
        phia = trong * 15000 
     }
     phiaa.value = phia

    }
    let tronlg = document.getElementById('trongluong')
    tronlg.addEventListener('input',checkphi)

    let index = 0;
    let table = document.getElementById('sampleTable')

// Add vao table
function insert_Row() {
    var table = document.getElementById("sampleTable");
    var row = table.insertRow();
    var stt = row.insertCell(0);
    var serial = row.insertCell(1);
    var mota = row.insertCell(2);
    var hinhanh = row.insertCell(3);
    var trongluong = row.insertCell(4);
    var chiphi = row.insertCell(5);
    var ngay = row.insertCell(6);
    var nuoc = row.insertCell(7);
    var emails = row.insertCell(8);
        
    stt.innerHTML = table.rows.length -1 ; 
    serial.innerHTML = document.querySelector('.input1').value;
    mota.innerHTML = document.querySelector('.input2').value;
    hinhanh.innerHTML = document.querySelector('.input3').value;
    trongluong.innerHTML = document.querySelector('.input4').value; 
    chiphi.innerHTML = document.querySelector('.input5').value; 
    ngay.innerHTML = document.querySelector('.input6').value;
    nuoc.innerHTML = document.querySelector('.selectNuoc').value;
    emails.innerHTML = document.querySelector('.input7').value;
}
//check email
function checkemail(){
    let email = document.getElementById('EMail').value
    let err5 = document.querySelector('.err5')
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(email == null || email ==""){
        err5.innerHTML = 'Không được trống'
    }else if(!regex.test(email)){
        err5.innerHTML ='Không đúng định dạng'
    }else{
        err5.innerHTML = ''
        return true
    }
        return false
}
//ngay kham
function checkngay(){
    var item_ngayvc = document.getElementById('date').value
    let err4 = document.querySelector('.err4')
    var ngayHienTai = new Date();
    var ngayvc = new Date(item_ngayvc)

    if (item_ngayvc == null || item_ngayvc ==''){
        err4.innerHTML = 'Không được để trống'
    }
    else if(ngayvc < ngayHienTai){
        err4.innerHTML = 'Ngày vận chuyển phải sau ngày hiện tại'
    }
    else{
        err4.innerHTML = ''
        return true;
    }
    return false;
}
//check 
function checkdieukien() {
    if (checkseri() && checkmota() && checktrongluong() && checkngay() && checkemail()) {
        insert_Row();
        return true;
    }
    else {
        return false;
    }
}
