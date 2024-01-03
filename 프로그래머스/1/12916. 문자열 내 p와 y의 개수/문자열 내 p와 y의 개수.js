function solution(s){
    let arr = s.toLowerCase().split('')
    let p = 0; let y=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 'p'){
            p++;
        }else if(arr[i]=='y'){
            y++;
        }
    }
    if( p == y ){
        return true;
    }else{
        return false
    }
}