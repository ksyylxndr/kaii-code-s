


import turtle

def draw_heart():
    turtle.penup()
    turtle.goto(0, 0)
    turtle.pendown()
    turtle.begin_fill()
    turtle.color("red", "pink")
    turtle.left(140)
    turtle.forward(180)
    turtle.circle(-90, 200)
    turtle.left(120)
    turtle.circle(-90, 200)
    turtle.forward(180)
    turtle.end_fill()
    turtle.exitonclick()

draw_heart()
turtle.done()