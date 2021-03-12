let base = new Array('T','ô','i',' ','l','à',' ','1',' ','t','h','ằ','n','g',' ','n','g','ố');
let count= 0;
let string ="";
let l;
document.getElementById("input").addEventListener("keyup", type);
function type() {
    if (count < 18) {
        string += base[count];
        count += 1;
        document.getElementById("input").value = string;
    }
    else {
        count = 0;
        string ="";
    }

}