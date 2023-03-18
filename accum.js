function accum (str) {
    let result = ''; 

    for (let i = 1; i <= str.length; i++) {
        repeat = str[i-1].repeat(i);
        
        result += repeat[0].toUpperCase() + repeat.slice(1).toLowerCase() + '-';
    }
    
    return result.slice(0, -1);
};

console.log(accum("RqaEzty"));