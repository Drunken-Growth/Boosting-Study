def solution(n, t, m, timetable):
    timetable = [ int(time[:2]) * 60 + int(time[3:]) for time in timetable]
    timetable.sort()
    
    current = 540
    
    for _ in range(n):
        for _ in range(m):
            # 대기가 있는 경우 1분 전 도착
            if timetable and timetable[0] <= current:
                candidate = timetable.pop(0) - 1
            else:
                candidate = current
                
        current += t
        
    # 시, 분으로 변경
    h, m = divmod(candidate, 60)
    return str(h).zfill(2) + ':' + str(m).zfill(2)
    
    
    # 셔틀은 09:00부터 총 n회 t분 간격으로 역에 도착하며, 하나의 셔틀에는 최대 m명의 승객이 탈 수 있다.