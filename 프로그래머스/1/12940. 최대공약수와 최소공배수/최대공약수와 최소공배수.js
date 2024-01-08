function solution(n, m) {
    var answer = [];
    let gcd = 0; // 최대공약수
    let lcm = 0; // 최소공배수
    let a, b;
    if (n < m) {  a = m; b = n; } else { a = n;b = m; }

    while (b !== 0) {
        let temp = a;
        a = b;
        b = temp % b;
    }
    gcd = a;
    lcm = (m * n) / gcd
    answer = [gcd , lcm]
    return answer;
}