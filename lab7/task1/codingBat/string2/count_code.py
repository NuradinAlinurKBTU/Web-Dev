def count_code(s):
    count = 0
    i = 0
    while i <= len(s) - 4:
        if s[i : i + 2] == "co" and s[i + 3] == "e":
            count += 1
        i += 1
    return count