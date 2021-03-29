class stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var op1={
restitution:0.8,
friction:0.9,
density:12
	}
		this.height=height;
		this.width=width;
		this.body=Bodies.rectangle(x,y,width,height,op1)
        World.add (world,this.body)

	}
	display()
	{
        var rubberpos=this.body.position;		
        push()
        translate(rubberpos.x, rubberpos.y);
        rectMode(CENTER)
        fill("black");
        //draw the ellipse here to display the rubber ball
        rectMode(CENTER)
    rect(0,0,this.width,this.height)

        pop()
            }

}