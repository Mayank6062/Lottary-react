//ye fun react specific nhi h js ke fun h jisme ham jsx nhi likhege 
//meanse esme na koi props h na state na hi component ko use kar rhe h 

function genTicket(n) { //n random num ko genrate karna h 
    let arr = new Array(n);
    for(let i =0; i<n ; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;

}

function sum(arr) { //it is possible that ham bad me orr funcanality add kar ar se related de esliye yha ticket as a arr na pass karke 
    //ham simple arr nam de rhe h 
    return arr.reduce((sum, currval) => sum + currval, 0); //start from 0
}


export {genTicket, sum};