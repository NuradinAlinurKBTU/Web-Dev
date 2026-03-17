class Question:
    def __init__(self, data):
        self.text = data["question"]
        self.options = data["options"]
        self.correct_index = data["answer"]

    def display(self, current_num, total_num):
        print(f"\nQuestion {current_num}/{total_num}: {self.text}")
        for i, option in enumerate(self.options):
            print(f"  {i + 1}. {option}")
        
        try:
            choice = int(input("Your answer (number): ")) - 1
            if 0 <= choice < len(self.options):
                if choice == self.correct_index:
                    print(" Correct!")
                    return True
                else:
                    print(f" Wrong! The correct answer was: {self.options[self.correct_index]}")
                    return False
            else:
                print(" Invalid option number.")
                return False
        except ValueError:
            print(" Please enter a number.")
            return False