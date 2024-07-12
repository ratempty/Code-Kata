def solution(s):
    answer = ''
    length = len(s)
    index = length // 2
    if length % 2 == 1:
        answer = s[index]
    else:
        answer = s[index-1:index+1]
    return answer