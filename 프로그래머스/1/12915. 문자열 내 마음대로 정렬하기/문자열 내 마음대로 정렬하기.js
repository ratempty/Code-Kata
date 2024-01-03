function solution(strings, n) {
    return strings.sort((a, b) => {
        const str1 = a[n];
        const str2 = b[n];

        if (str1 === str2) {
            return a > b ? 1 : -1 ;
        }else {
            return str1 > str2 ? 1 : -1;   
        }
    });
}