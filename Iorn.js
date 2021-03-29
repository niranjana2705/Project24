class Iorn{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var op1={
restitution:0.8,
friction:3,
density:30
	}
    this.height=height;
    this.width=width;
		this.body=Bodies.rectangle(x,y,width,height,op1)
        World.add (world,this.body)

	}
	display()
	{
			var pos=this.body.position;		
            var angle=this.body.angle;
            push ()
            translate (pos.x,pos.y)
            rotate (angle)
            fill("red");
        rectMode(CENTER)
            rect (0,0,this.width,this.height);
            pop ();
            }

}