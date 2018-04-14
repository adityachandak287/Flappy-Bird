function Pipe()
{
    this.gap = random(200,height/2);
    this.w = 50;
    if(random(1)<0.5)
    {
        this.h1 = random(100, height/2 - this.gap);
    }
    else
    {
        this.h1 = random(height/2, height - this.gap);
    }
    this.h2 = height - this.h1 - this.gap;
    this.v = -5;
    this.x = width + this.w/2;

    this.update = function()
    {
        this.x += this.v;
    }

    this.show = function()
    {

        fill(0,255,0);
        rectMode(CENTER);
        rect(this.x,this.h1/2,this.w,this.h1);
        rectMode(CENTER);
        rect(this.x,this.h1+this.gap+this.h2/2,this.w,this.h2);
    }

    this.offscreen = function()
    {
        return this.x < -this.w;
    }

    this.hit = function(b)
    {
            if(this.x > width/2 - this.w/2 - b.r && this.x<width/2 + this.w/2 + b.r)
                if((b.y - b.r < this.h1 || b.y + b.r > this.h1 + this.gap)) {
                return true;
            }
            else
                return false;
    }
}
