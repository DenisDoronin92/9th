let a = [1,2,3,4,5,6,7,8,9,10]
let d = [1,2,3,4,5,6,7,8,9,10]
let e = [[1,2,3,4,5], [6,7,8,9,10]]
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let b = document.querySelector('.out')

btn.onclick = function(){
    for (let i = 0; i < 5; i++) {
        b.innerHTML += (a[i]);
        
    }
    return
    
    
}
btn2.onclick = function() {
    
    for (let i = 0; i < d.length; i++) {
        if (i % 2 !== 0) {
            b.innerHTML += (d[i]);
        }
              
    }
    return
       
}
btn3.onclick = function() {
    
    for (let i = 0; i < d.length; i++) {
        if (i % 2 == 0) {
            b.innerHTML += (d[i]);
        }
              
    }
    return
       
}


btn4.onclick = function () {
    for (let i = 0; e.length > i; i++) {
        let q = e[i]
        for(let j = 0; q.length > j; j++){
            let u = q[j]
            b.innerHTML += (u);
        }   
             
}
}



