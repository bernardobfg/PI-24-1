import serial
import time

class Gate():
  def __init__(self, port) -> None:
    self.arduino = serial.Serial(port = port, baudrate = 115200, timeout=1)

  def open(self):
    delim = bytes(';', "utf-8")
    angles = ( bytes(str(int(90)), "utf-8"))
    self.arduino.write(angles)   
    self.arduino.write(delim)
    time.sleep(2)
    self.close()

  def close(self):
    delim = bytes(';', "utf-8")
    angles = ( bytes(str(int(0)), "utf-8"))
    self.arduino.write(angles)
    self. arduino.write(delim)

