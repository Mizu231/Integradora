from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def bienvenida():
    return render_template('bienvenida.html')

@app.route('/inicio')
def inicio():
    return render_template('inicio.html')

@app.route('/panel')
def panel():
    return render_template('panel.html')

@app.route('/historial')
def historial():
    return render_template('historial.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

if __name__ == '__main__':
    app.run(debug=True)
