# quiz.py
from data import quiz_questions
from question import Question

def run_quiz():
    score = 0
    total = len(quiz_questions)
    
    print(" COMPUTER ARCHITECTURE QUIZ ! ")

    
    for i, item in enumerate(quiz_questions, 1):
        q = Question(item)
        if q.display(i, total):
            score += 1
            
    print(f"QUIZ FINISHED! Your Score: {score} out of {total}")
    
    percentage = (score / total) * 100
    print(f"Percentage: {percentage:.1f}%")
    
    if percentage >= 1:
        print("Rank: You really a computer architecture Professor!")
    

if __name__ == "__main__":
    run_quiz()