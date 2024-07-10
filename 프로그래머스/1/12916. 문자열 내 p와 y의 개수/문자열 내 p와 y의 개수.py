def solution(s):
    p = 0 
    y = 0
    for curr in s:
        if curr == "p" or curr == "P":
            p += 1
        elif curr == "y" or curr == "Y":
            y += 1
    
    if p == y:
        return True
    else:
        return False