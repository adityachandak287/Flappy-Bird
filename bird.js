function Bird()
{
    this.y = height/2;
    this.r = 25;
    this.lift = -10;
    this.vel = 0;

    this.update = function()
    {
        this.vel += gravity;
        this.y += this.vel;

        if(this.y >= height - this.r)
        {
            this.vel = 0;
            this.y = height - this.r;
        }
        if(this.y <= this.r)
        {
            this.y = this.r;
            this.vel = 0;
        }

    }

    this.jump = function()
    {
        this.vel = this.lift;
    }

    this.show = function()
    {
        fill(255);
        noStroke();
        ellipse(width/2,this.y,this.r*2,this.r*2);
    }


}