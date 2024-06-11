
import Product from "../components/Product.js";

// 상품 데이터
const p1 = new Product('에어팟', 200000, '에어팟으로 노래를 들어요.', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg')

const p2 = new Product('족발', 40000, '냠냠쩝쩝 족발은 앞다리야~.', 'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp')
// 서버에서 전송된 JSON
const productList = {
  products: [
    p1,
    p2,
    new Product('요구르트', 500, '요거어어엉어르트', 'data:image/jpeg;base64,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')
   , new Product('쿼터파운더 치즈버거', 7500, "햄버거거어어어엉", 'data:image/jpeg;base64,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') 
  ],

  render: function() {
    const $prodList = document.createElement('ul');
    $prodList.classList.add('producct-list');
    // 반복해서 li태그를 생성
    // console.log(`products: `, this.products);
    this.products.forEach(prod => {
      const $prodLi = document.createElement('li');
      $prodLi.classList.add('product-item');
      $prodLi.innerHTML = `
      <div>
        <img src="${prod.image}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>${prod.price}원</h3>
          <p>${prod.desc}</p>
          <button>담기</button>
        </div>
      </div>
    `;

    $prodList.appendChild($prodLi);
    });

    // div#app에 ul추가
    document.getElementById('app').appendChild($prodList);
  }


};

productList.render();