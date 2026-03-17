from models import Animal, Dog, Cat


def main():
    dog = Dog("Rex", 5, "Brown", "Shepherd")
    cat = Cat("Murka", 3, "White", True)
    animal = Animal("Generic", 2, "Gray")

    animals = [dog, cat, animal]

    for a in animals:
        print(a)  # __str__
        print(a.eat())
        print(a.sleep())
        print(a.speak())  # polymorphism
        print("------")


if __name__ == "__main__":
    main()