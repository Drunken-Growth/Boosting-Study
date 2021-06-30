import collections

def solution(record):
    answer = []
    hash_table = collections.defaultdict(str)
    record = [r.split() for r in record]
    
    # 최종적으로 바뀐 아이디
    for r in record:
        attr = r[0] 
        u_id = r[1]
        if attr == 'Enter':
            hash_table[u_id] = r[2]
        elif attr == 'Change':
            hash_table[u_id] = r[2]
            
    # record 확인 
    for r in record:
        attr = r[0]
        u_id = r[1]
        if attr == 'Enter':
            answer.append(f'{hash_table[u_id]}님이 들어왔습니다.')
        elif attr == 'Leave':
            answer.append(f'{hash_table[u_id]}님이 나갔습니다.')
            
    return answer