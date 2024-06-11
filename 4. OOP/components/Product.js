class Product {
  constructor(title, price, desc, image) {
    this.title = title;
    this.price = price;
    this.desc = desc;
    this.image = image;
  }
}

// 이렇게 하면 중괄호 없이 바로 import가능 하지만 모듈에 default는 1개만 있어야 함
export default Product;