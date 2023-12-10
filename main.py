import random

die = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

roll = random.choice(die)
if roll == 1:
    print("critical failure: ", roll)
elif roll == 20:
    print("critical success: ", roll)
else:
    print("roll: ", roll)