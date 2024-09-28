import random
import string


SysRandom = random.SystemRandom()
def generate_random_string(length: int = 3, punctuation: bool = False) -> str:
    """generate random strings
     params:
        length: int  = length of random string - default is 6
        punctuation: bool = punctuation in random string or not
     return:
        str: string: random string
     """
    letters = string.ascii_letters
    if punctuation:
        letters += string.punctuation
    random_string = SysRandom.choices(letters, k=length)

    return "".join(random_string)
