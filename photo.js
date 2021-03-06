class Photo {
  constructor(width = 8, height = 10){
      this.width = width;
      this.height = height;
  }

  price(){
      let finalPrice;

      if ((this.width == 8) && (this.height == 10)){
          finalPrice = 4;
      } else {
          if ((this.width == 10) && (this.height == 12)){
              finalPrice = 6;
          } else {
              finalPrice = 10;
          }
      }

      return finalPrice;
  }

  toString(){
      return `This photo is ${this.width} / ${this.height} and it costs $${this.price()}`;
  }
}

let photo1 = new Photo();
console.log(photo1.toString());

let photo2 = new Photo(12, 15);
console.log(photo2.toString());