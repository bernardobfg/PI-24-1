import tkinter
from gate import Gate
app = tkinter.Tk() 
app.geometry("400x240")
app.title("SmartGate")

gate=Gate("COM5")
button = tkinter.Button(master=app, text="Abrir Catraca", command=gate.open)
button.place(relx=0.5, rely=0.5, anchor=tkinter.CENTER)

app.mainloop()