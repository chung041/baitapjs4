//Bài 1: Viết chương trình tìm ngày, tháng, năm

document.getElementById("calculate1").onclick = function () {
    //Lấy dữ liệu ngày, tháng, năm từ thẻ input-html về và gán biến
    let dateEl = +document.getElementById("date").value
    let monthEl = +document.getElementById("month").value
    let yearEl = +document.getElementById("year").value

    //KIẺM TRA HÔM QUA
    //KIỂM TRA NHẬP ĐÚNG DỮ LIỆU. VD: THÁNG 2 NĂM NHUẦN KHÔNG QUÁ 29 NGÀY, THÁNG 2 NĂM THƯỜNG KHÔNG QUÁ 28 NGÀY, CÁC THÁNG CÒN LẠI KHÔNG QUÁ 30 HOẶC 31 NGÀY
    if ((monthEl === 5 || monthEl === 7 || monthEl === 10 || monthEl === 12) && dateEl > 31) {
        document.getElementById('result1').value = "Vui lòng nhập lại"
    } else if ((monthEl === 1 || monthEl === 2 || monthEl === 4 || monthEl === 6 || monthEl === 8 || monthEl === 9 || monthEl === 11) && dateEl > 30) {
        document.getElementById('result1').value = "Vui lòng nhập lại"
    }  else if (dateEl == 1 && monthEl == 1) {
        yearEl = yearEl - 1;
        document.getElementById('result1').value = "31" + "/" + "12" + "/" + yearEl
    } else if (yearEl % 4 != 0 && monthEl == 3 && dateEl == 1) {
        document.getElementById('result1').value = "28" + "/" + "2" + "/" + yearEl
    } else if ((monthEl === 5 || monthEl === 7 || monthEl === 10 || monthEl === 12) && dateEl == 1) {
        monthEl = monthEl - 1;
        document.getElementById('result1').value = 30 + "/" + monthEl + "/" + yearEl
    } else if ((monthEl === 1 || monthEl === 2 || monthEl === 4 || monthEl === 6 || monthEl === 8 || monthEl === 9 || monthEl === 11) && dateEl == 1) {
        monthEl = monthEl - 1;
        document.getElementById('result1').value = 31 + "/" + monthEl + "/" + yearEl
    } else {
        dateEl = dateEl - 1
        document.getElementById('result1').value = dateEl + "/" + monthEl + "/" + yearEl
    }
}

document.getElementById("calculate2").onclick = function () {

    let dateEl = +document.getElementById("date").value
    let monthEl = +document.getElementById("month").value
    let yearEl = +document.getElementById("year").value

    //KIẺM TRA NGÀY MAI
    if ((monthEl === 5 || monthEl === 7 || monthEl === 10 || monthEl === 12) && dateEl > 31) {
        document.getElementById('result2').value = "Vui lòng nhập lại"
    } else if ((monthEl === 1 || monthEl === 2 || monthEl === 4 || monthEl === 6 || monthEl === 8 || monthEl === 9 || monthEl === 11) && dateEl > 30) {
        document.getElementById('result2').value = "Vui lòng nhập lại"
    }  else if (dateEl == 31 && monthEl == 12) {
        yearEl = yearEl + 1;
        document.getElementById('result2').value = "1" + "/" + "1" + "/" + yearEl
    } else if (yearEl % 4 == 0 && (yearEl % 100) != 0 && monthEl == 2 && dateEl == 29) {
        document.getElementById('result2').value = "1" + "/" + "3" + "/" + yearEl
    } else if (yearEl % 4 != 0 && monthEl == 2 && dateEl == 28) {
        document.getElementById('result2').value = "29" + "/" + "2" + "/" + yearEl
    } else if ((monthEl === 1 || monthEl === 3 || monthEl === 5 || monthEl === 7 || monthEl === 8 || monthEl === 10 || monthEl === 12) && dateEl == 31) {
        monthEl = monthEl + 1;
        document.getElementById('result2').value = 1 + "/" + monthEl + "/" + yearEl
    } else if ((monthEl === 4 || monthEl === 6 || monthEl === 9 || monthEl === 11) && dateEl == 30) {
        monthEl = monthEl + 1;
        document.getElementById('result2').value = 1 + "/" + monthEl + "/" + yearEl
    } else {
        dateEl = dateEl + 1
        document.getElementById('result2').value = dateEl + "/" + monthEl + "/" + yearEl
    }

}

//Bài 2: Cho biết tháng đó có bao nhiêu ngày?

//Lấy dữ liệu ngày, tháng, năm từ thẻ input-html về và gán biến
document.getElementById("calculate").onclick = function () {
    let thangEl = +document.getElementById("thang").value
    let namEl = +document.getElementById("nam").value

    //KIẺM TRA NHẬP ĐÚNG NGÀY VÀ THÁNG
    if (thangEl > 12 || namEl < 1) {
        document.getElementById('result3').value = "Vui lòng nhập lại"
    } else if ((namEl % 4) != 0 && thangEl == 2) {
        document.getElementById('result3').value = "Tháng 2 " + namEl + " có 28 ngày "
    } else if ((namEl % 4) == 0 && (namEl % 100) != 0 && thangEl == 2) {
        document.getElementById('result3').value = "Tháng 2 " + namEl + " có 29 ngày "
    } else if (thangEl === 1 || thangEl === 3 || thangEl === 5 ||
        thangEl === 7 || thangEl === 8 || thangEl === 10 || thangEl === 12) {
        document.getElementById('result3').value = "Tháng " + thangEl + " năm " + namEl + " có 31 ngày "
    } else {
        document.getElementById('result3').value = "Tháng " + thangEl + " năm " + namEl + " có 30 ngày "
    }
}
//Bài 3: Viết chương trình đọc số có 3 chữ số

//Lấy dữ liệu ngày, tháng, năm từ thẻ input-html về và gán biến
document.getElementById("speakOut").onclick = function () {
    let figureEl = +document.getElementById("figure").value
    //KIỂM TRA NHẬP ĐÚNG SỐ CÓ 3 CHỮ SỐ
    if (figureEl < 100 || figureEl > 999) {
        document.getElementById("result4").value = "Vui lòng nhập lại"
    } else if (figureEl == 100 || figureEl == 200 || figureEl == 300 || figureEl == 400 || figureEl == 500 || figureEl == 600 || figureEl == 700 || figureEl == 800 || figureEl == 900) {
        let hundreds = figureEl / 100;
        document.getElementById("result4").value = hundreds + " trăm "
    } else {

        //Tính số hàng đơn vị
        let units = figureEl % 10;
        let tens = ((figureEl - units) / 10) % 10;
        let hundreds = Math.floor(figureEl / 100)
        document.getElementById("result4").value = hundreds + " trăm " + tens + " mươi " + units
    }

}

//Bài 4: Tìm sinh viên xa trường nhất

//Lấy dữ liệu ngày, tháng, năm từ thẻ input-html về và gán biến
document.getElementById("check").onclick = function () {
    //DOM thông tin sinh viên thứ nhất về
    let student1El = document.getElementById("student1").value
    let student1xEl = +document.getElementById("student1x").value
    let student1yEl = +document.getElementById("student1y").value

    //DOM thông tin sinh viên thứ nhất về
    let student2El = document.getElementById("student2").value
    let student2xEl = +document.getElementById("student2x").value
    let student2yEl = +document.getElementById("student2y").value

    //DOM thông tin sinh viên thứ nhất về
    let student3El = document.getElementById("student3").value
    let student3xEl = +document.getElementById("student3x").value
    let student3yEl = +document.getElementById("student3y").value

    //DOM toạ độ trường học về
    let schoolxEl = +document.getElementById("schoolx").value
    let schoolyEl = +document.getElementById("schooly").value

    //Tính khoảng cách từ nhà các sinh viên đến trường
    let distance1 = Math.sqrt((student1xEl - schoolxEl) * (student1xEl - schoolxEl) +
        (student1yEl - schoolyEl) * (student1yEl - schoolyEl))
    let distance2 = Math.sqrt((student2xEl - schoolxEl) * (student2xEl - schoolxEl) +
        (student2yEl - schoolyEl) * (student2yEl - schoolyEl))
    let distance3 = Math.sqrt((student3xEl - schoolxEl) * (student3xEl - schoolxEl) +
        (student3yEl - schoolyEl) * (student3yEl - schoolyEl))

    //Tìm sinh viên có nhà đến trường xa nhất
    if (distance1 >= distance2 && distance1 >= distance3) {
        document.getElementById('result5').value = student1El + ", khoảng cách: " + distance1
    } else if (distance2 >= distance1 && distance2 >= distance3) {
        document.getElementById('result5').value = student2El + ", khoảng cách: " + distance2
    } else if (distance3 >= distance1 && distance3 >= distance2) {
        document.getElementById('result5').value = student3El + ", khoảng cách: " + distance3
    }

}
