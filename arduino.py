import serial
import tkinter
import time

app = tkinter.Tk() 
app.geometry("400x240")
app.title("SmartGate")

arduino = serial.Serial(port = 'COM5', baudrate = 115200, timeout=1)


def open():
    delim = bytes(';', "utf-8")
    angles = ( bytes(str(int(90)), "utf-8"))
    arduino.write(angles)   
    arduino.write(delim)
    time.sleep(2)
    close()
    return 1

def close():
    delim = bytes(';', "utf-8")
    angles = ( bytes(str(int(0)), "utf-8"))

    arduino.write(angles)
    arduino.write(delim)
    return 1

button = tkinter.Button(master=app, text="Abrir Catraca", command=open)
button.place(relx=0.5, rely=0.5, anchor=tkinter.CENTER)

app.mainloop()