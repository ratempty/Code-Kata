function solution(a, b) {
    var answer = '';
    let dayArr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let month;
    (a<10)? month = '0' + a : month = a;
    let cal = new Date('2016-'+month+'-'+b).getDay();
    return dayArr[cal];
}