function solution(number) {
    let answer = 0;
    
    for(let i = 0; i < number.length; i++){
        for(let j = 0; j < number.length; j++){
            for(let k = 0; k < number.length; k++){
                if(i !== j && i !==k && j !== k){
                    if(number[i] + number[j] + number[k] === 0) answer += 1;
                }
            }
        }
    }
    
    return answer / 6;
}