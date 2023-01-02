//Bài 1: Xuất 3 số nguyên theo thứ tự tăng dần

document.getElementById("calculate").onclick = function () {
    //DOM giá trị 3 số nhập vào từ thẻ input-html và gán biến
    let number1El = +document.getElementById("number1").value
    let number2El = +document.getElementById("number2").value
    let number3El = +document.getElementById("number3").value

    //Kiểm tra giá trị 3 số lấy về, và sắp xếp từ nhỏ đến lớn
    if (number1El > number2El && number2El > number3El) {
        document.getElementById("result1").value = number3El
        document.getElementById("result2").value = number2El
        document.getElementById("result3").value = number1El
    } else if (number1El > number2El && number2El < number3El && number1El > number3El) {
        document.getElementById("result1").value = number2El
        document.getElementById("result2").value = number3El
        document.getElementById("result3").value = number1El
    } else if (number1El < number2El && number2El < number3El) {
        document.getElementById("result1").value = number1El
        document.getElementById("result2").value = number2El
        document.getElementById("result3").value = number3El
    } else if (number1El < number2El && number3El < number2El && number1El < number3El) {
        document.getElementById("result1").value = number1El
        document.getElementById("result2").value = number3El
        document.getElementById("result3").value = number2El
    } else if (number1El < number2El && number3El < number2El && number1El > number3El) {
        document.getElementById("result1").value = number3El
        document.getElementById("result2").value = number1El
        document.getElementById("result3").value = number2El
    } else {
        document.getElementById("result1").value = number2El
        document.getElementById("result2").value = number1El
        document.getElementById("result3").value = number3El
    }
}

//Bài 2: Viết chương trình chào hỏi thành viên gia đình

document.getElementById("average").onclick = function () {
    //DOM giá trị người user muốn gửi lời chào từ thẻ input-html và gán biến
    let memberEl = document.getElementById("member").value
    if (memberEl === "dad") {
        document.getElementById('result4').value = "Xin chào Bố!"
    } else if (memberEl === "mom") {
        document.getElementById('result4').value = "Xin chào Mẹ!"
    } else if (memberEl === "bigBrother") {
        document.getElementById('result4').value = "Xin chào Anh trai!"
    } else if (memberEl === "youngSister") {
        document.getElementById('result4').value = "Xin chào Em gái!"
    } else {
        document.getElementById('result4').value = "Kết quả"
    }
}
//Bài 3: Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.

document.getElementById("chanLe").onclick = function () {
    //DOM giá trị 3 số nhập vào từ thẻ input-html và gán biến
    let figure1El = document.getElementById("figure1").value
    let figure2El = document.getElementById("figure2").value
    let figure3El = document.getElementById("figure3").value
    let sum = 0
    if (figure1El % 2 === 0) {
        sum = sum + 1;
    }
    if (figure2El % 2 === 0) {
        sum = sum + 1;
    }
    if (figure3El % 2 === 0) {
        sum = sum + 1;
    }
    document.getElementById("result5").value = sum
}

//Bài 4: Hãy cho biết đó là tam giác gì?

document.getElementById("check").onclick = function () {
    //DOM giá trị 3 cạnh tam giác nhập vào từ thẻ input-html và gán biến
    let length1El = +document.getElementById("length1").value
    let length2El = +document.getElementById("length2").value
    let length3El = +document.getElementById("length3").value

    if (length1El == length2El && length2El == length3El) {
        document.getElementById("result6").value = "Tam gíac đều"
    } else if (length1El == length2El || length2El == length3El || length3El == length1El) {
        document.getElementById("result6").value = "Tam gíac cân"
    } else if (length1El * length1El + length2El * length2El == length3El * length3El || length1El * length1El + length3El * length3El == length2El * length2El || length3El * length3El + length2El * length2El == length1El * length1El) {
        document.getElementById("result6").value = "Tam gíac vuông"
    } else {
        document.getElementById("result6").value = "Tam gíac khác"
    }
}



