export abstract class MyGraphicsPrimitive2D {
  constructor (public posX: number, public posY: number) 
  {}

  public move(offsetX: number, offsetY: number):  Array<number> {
    const newCoordinates: Array<number> = [offsetX + this.posX, offsetY + this.posY]
    return newCoordinates
  }
}

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  public abstract squre():number
}

export class MyRectangle extends MyAreaPrimitive2D {
  constructor(posX: number, posY: number, private widht: number, private height: number){
    super(posX, posY)
  }
  public squre(): number {
    const rectangleSquare = this.widht * this.height
    return rectangleSquare
  }
}

export class MyCircle extends MyAreaPrimitive2D  {
  constructor(private radius: number, posX: number, posY: number){
    super(posX, posY)
  }
  public squre(): number {
    const CircleleSquare = Math.PI * this.radius * this.radius
    return CircleleSquare
  }
}
