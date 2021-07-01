def solution(m, n, board):
    board = [list(x) for x in board]
    
    matched = True
    while matched:
        # 1) 일치 여부 판별
        matched = []
        for i in range(m - 1):
            for j in range(n - 1):
                if board[i][j] == \
                        board[i][j + 1] == \
                        board[i + 1][j + 1] == \
                        board[i + 1][j] != '#':
                    matched.append([i, j])

        # 2) 일치한 위치 삭제
        for i, j in matched:
            board[i][j] = board[i][j + 1] = board[i + 1][j + 1] = board[i + 1][j] = '#'

        # 3) 빈공간 블럭 처리
        for _ in range(m):
            for i in range(m - 1):
                for j in range(n):
                    if board[i + 1][j] == '#':
                        board[i + 1][j], board[i][j] = board[i][j], '#'

    return sum(x.count('#') for x in board)


"""
    1) 일치 여부를 찾는 것
    2) 일치한 위치를 삭제하는것 (삭제후 #로 처리한다.)
    3) 빈 공간에 위에 있는 블록을 아래로 떨어뜨리는 것
"""