document.getElementById("generate").onclick = function (){
    function user(user){
        let rmd1  = Math.floor(Math.random() * 9) + 1;
        let rnd2  = Math.floor(Math.random() * 90) + 10;
        let rnd3  = Math.floor(Math.random() * 900) + 100; 
        let rnd4  = Math.floor(Math.random() * 9000) + 1000;
        let rnd5  = Math.floor(Math.random() * 90000) + 10000;
        let rnd6  = Math.floor(Math.random() * 900000) + 100000;
        let rnd7  = Math.floor(Math.random() * 9000000) + 1000000;
        let rnd8  = Math.floor(Math.random() * 90000000) + 10000000;
    
        let numb15 = '012345678912345';
        let numb14 = '01234567891234';
        let numb13 = '0123456789123';
        let numb12 = '012345678912';
        let numb11 = '01234567891';
        let numb10 = '1234567890';
        let numb9  = '123456789';
        let numb8  = '12345678';
        let numb7  = '1234567';
    
        let usr  = String(user);
    
        if      ( usr.length == numb8.length){
            return usr+=rnd8;
        }
        else if ( usr.length == numb9.length){
            return usr+=rnd7;
        }
        else if ( usr.length == numb10.length){
           return  usr+=rnd6;
        }
        else if ( usr.length == numb11.length){
            return usr+=rnd5;
        }
        else if ( usr.length == numb12.length){
            return usr+=rnd4;
        }
        else if ( usr.length == numb13.length){
            return usr+=rnd3;
        }
        else if ( usr.length == numb14.length){
            return usr+=rnd2;
        }
        else if ( usr.length == numb15.length){
            return usr+=rnd1;
        }
    }
    
    function Rmonth() {
        let n = Math.floor(Math.random() * 12) + 1;
        n = String(n);
        let zero = "0";
    
        if (n != 10 && n != 11 && n != 12){
        	let rn = `${zero}${n}`;
            return document.getElementById('month').value = rn;
        }
        else{
            let rm = n;
            return document.getElementById('month').value = rm;
        }
    }
    function monthSelect() {
        return document.getElementById('month').value;
    }
    
    function Ryear() {
        let n = [2022,2023,2024,2025,2026,2027,2028,2029,2030];
        let ry = n[Math.floor(Math.random() * n.length)];
        return document.getElementById('year').value = ry;
    }
    function yearSelect(){
        return document.getElementById('year').value;
    }
    
    function Rcvv() {
        let cvv = Math.floor(Math.random() * 900) + 100;
        return document.getElementById('cvv').value = cvv;
    }
    function cvv(){
        return document.getElementById('cvv').value;
    }
    
    let quantity = document.getElementById('quantity').value;
    let quanti = Number(quantity);

    for(let start = 0; start <= quanti; start++){
        let Uuser = user(document.getElementById("bin").value);
        let res = `${Uuser}|${Rmonth()}|${Ryear()}|${Rcvv()}`;
        document.getElementById("results").innerHTML += res + '\n';
    }
}