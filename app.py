from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    name = request.form['name']
    email= request.form['email']
    age = request.form['age']
    return render_template('index2.html', name=name,email=email, age=age)

if __name__ == '__main__':
    app.run(debug=True)
