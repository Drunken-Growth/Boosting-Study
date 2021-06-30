def solution(s):
    result = ''
    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1: right]
    
    # 해당 사항이 없는 경우
    if len(s) < 2 or s == s[::-1]:
        return len(s)
    
    # 슬라이딩 윈도우 우측으로 이동
    for i in range(len(s) - 1):
        result = max(result, 
                        expand(i, i + 1),
                        expand(i, i + 2),
                        key = len
                        )
        
    answer = len(result)
    return answer