// Add your Circle class here

class Circle{
  constructor(radius)
  {
    this.radius=radius;
  }
  
  get diameter()
  {
    let diameter = this.radius * 2;
<<<<<<< HEAD
    return  diameter;
=======
    return   diameter
>>>>>>> 6f8c72ad7763badf76b67fa8f61606cbd68a4c85
  }
  set  diameter(diameter)
  {
    this.radius= diameter / 2;
  }

 
  get circumference(){
    let circumference = Math.PI * this.diameter
    return circumference
  }
  

<<<<<<< HEAD
  set circumference(circumference)
  {
     this.radius = circumference / ( Math.PI * 2 )
  }
  
   get area()
  {
    let area= Math.PI * this.radius * this.radius;
    return area
  }
   set area(area)
  {
      this.radius = Math.sqrt( area / Math.PI )
  }

 
=======
  set circumference(diameter)
  {
  this.diameter= diameter;
  }
  get circumference()
  {
    return Math.PI * this.diameter
  }

  set area(radius)
  {
    this.radius=radius;
  }

  get area()
  {
    return Math.PI * this.radius * this.radius;
  }
>>>>>>> 6f8c72ad7763badf76b67fa8f61606cbd68a4c85
}
