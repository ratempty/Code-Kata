def solution(seoul):
    answer = ''
    for index,name in enumerate(seoul):
        if name == 'Kim':
            answer = f'김서방은 {index}에 있다'
    return answer