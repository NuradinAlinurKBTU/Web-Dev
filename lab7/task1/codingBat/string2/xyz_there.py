def xyz_there(s):
    i = 0
    while i <= len(s) - 3:
        if s[i : i + 3] == "xyz":
            if i == 0 or s[i - 1] != ".":
                return True
        i += 1
    return False