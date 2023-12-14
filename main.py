import random

die = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

print("welcome to the d20 roller! type: \n'roll' to roll\n'adv' to roll with advantage\n'dis' to roll with disadvantage\n'quit' to exit.")
while True:
    proceed = input("input here: ")

    if proceed == "roll":
        num = random.choice(die)
        print("roll: ", num)
    
    if proceed == "adv":
        num1 = random.choice(die)
        num2 = random.choice(die)
        print(num1, " ", num2)  # debug
        print("roll (with advantage): ", max(num1, num2))

    if proceed == "dis":
        num1 = random.choice(die)
        num2 = random.choice(die)
        print(num1, " ", num2)  # debug
        print("roll (with disdvantage): ", min(num1, num2))

    elif proceed == "quit":
        break
    else: 
        continue
