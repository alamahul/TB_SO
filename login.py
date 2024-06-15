from tkinter import *


root = Tk()
root.title("Penjadwalan Pesanan Restoran")
root.resizable(False, False)
root.config()

mainFrame = Frame(root,width=1200, height=685, background="#DAB7B7")
mainFrame.pack() 
mainFrame.pack_propagate(False)

loginFrame = Frame(mainFrame, width=1180, height=660, background="#EF6363")
loginFrame.pack(pady=5)

subFrame = Frame(loginFrame, width=1112, height=600, highlightbackground="blue", highlightthickness="2")

root.mainloop()