class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def eat(self):
        return self.name + " is eating"

    def sleep(self):
        return self.name + " is sleeping"

    def speak(self):
        return "Some sound"

    def __str__(self):
        return "Name: " + self.name + ", Age: " + str(self.age) + ", Color: " + self.color


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        Animal.__init__(self, name, age, color)
        self.breed = breed

    def speak(self):
        return self.name + " says Woof!"

    def fetch(self):
        return self.name + " is fetching a ball"


class Cat(Animal):
    def __init__(self, name, age, color, is_lazy):
        Animal.__init__(self, name, age, color)
        self.is_lazy = is_lazy

    def speak(self):
        return self.name + " says Meow!"

    def scratch(self):
        return self.name + " is scratching furniture"