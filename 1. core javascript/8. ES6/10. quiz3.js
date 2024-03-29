const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 500000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

const mappedTraders = traders
  .filter((user, index) => user.year === 2022)
  .map((user) => user.trader);

console.log(mappedTraders);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.

const tradersCity = traders.map((userAddr) => userAddr.trader.city);

//  const cities = [...new Set(tradersCity)];
let cities = [];
tradersCity.forEach((city) => {
  if (!cities.includes(city)) cities.push(city);
});

console.log(cities);
// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.

// const tradeDJ = traders
//   .filter((user) => user.trader.city === "대전")
//   .map((user) => user.trader)
//   .reduce((mappedtrs, trs) => {
//     if(!(trs.trader.name in mappedtrs.trader)) mappedtrs.push(trs.trader);
//     return mappedtrs;
//   }, []);
// console.log(mappedtrs);
// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.

const traderName = [...new Set(traders.map((user) => user.trader.name))];

console.log(traderName);
// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
console.log(`==========================`);
const total = traders
  .filter((trs) => trs.trader.city === "서울")
  .reduce((total, trs) => total + trs.value, 0);

console.log(`서울에 사는 거래자의 모든 거래액의 총합 = ${total}원`);

/*

1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

*/
let total2 = 0;
const valueInDj = traders
  .filter((user) => user.year === 2023 && user.trader.city === "대전")
  .reduce((totalDjValue, trs) => {
    return totalDjValue + trs.value;
  }, 0);

console.log(valueInDj);
/*

2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**

*/

const traderInBs = traders
  .filter((user) => user.trader.city === "부산")
  .map((user) => user.trader.name);

console.log(traderInBs);

/*

3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

*/
console.log("===================================");
const maxValue = traders.reduce((maxValueTrs, trs) =>
  maxValueTrs.value < trs.value ? trs : maxValueTrs
);

console.log(
  `${maxValue.trader.name}, ${maxValue.trader.city}, ${maxValue.value}`
);

// const highvalue = traders
//   .reduce((prev, current) => { prev.value > current.value ? prev : current});
//   // console.log(highvalue);

// const result = highvalue.trader
// console.log(result);
/*

4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

*/
console.log(`=====================================================`);
const cityValue = traders.reduce((citiesTotalValue, trs) => {
  // const city = trs.trader.city;
  // citiesTotalValue[city] = (citiesTotalValue[city] || 0) + trs.value;
  if (trs.trader.city in citiesTotalValue) {
    citiesTotalValue[trs.trader.city] += trs.value;
  } else {
    citiesTotalValue[trs.trader.city] = trs.value;
  }

  return citiesTotalValue;
}, {});

console.log(cityValue);
/*

5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 
결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

*/
console.log(`=============================================`);
// 최종 결과 객체
const classificationTrsByYear = traders
  .filter((trs) => trs.value >= 700000)
  .reduce((clsfTrs, trs) => {
    if (trs.year in clsfTrs /* clsfTrs[trs.year.toString()]*/) {
      clsfTrs[trs.year.toString()].push(trs);
    } else {
      clsfTrs[trs.year.toString()] = [trs];
    }
    return clsfTrs;
  }, {});
console.log(JSON.stringify(classificationTrsByYear, null, 2));
// console.log(classificationTrs);
/*

6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

*/
// 평균을 구하려면 각자의 거래액 총합과 거래 횟수를 구해야 한다.
/*
  {
    `김철수` : {
      `총액` : ######
      `거래횟수` : 5
    }
    `박영희` : {
      `총액` : ######
      `거래횟수` : 2
    }
  }
*/
console.log(`===============================================`);

const trsDataByName = traders.reduce((averageList, trs) => {
  const name = trs.trader.name;
  if (!averageList[name]) {
    averageList[name] = { total: trs.value, count: 1 };
  } else {
    averageList[name].total += trs.value;
    averageList[name].count++;
  }

  return averageList;
}, {});

// 평균 구하기
for(const key in trsDataByName) {
  trsDataByName[key].average = trsDataByName[key].total / trsDataByName[key].count;
}

console.log(trsDataByName);

// const averageValue = traders.reduce((averageTrs, trs) => {
//   if (trs.trader.name in averageTrs) {
//     averageTrs[trs.trader.name].push(trs.value);
//   } else {
//     averageTrs[trs.trader.name] = [trs.value];
//   }
//   return averageTrs;
// }, {});
// console.log(averageValue);

// for (const key in averageValue) {
//   let avg = 0;
//   for (let i = 0; i < averageValue[name].length; i++) {
//     avg += averageValue[name][i];
//   }
//   avg /= averageValue[name].length;
//   averageValue[name] = avg;
// }
// console.log(averageValue);

/*

7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

*/
console.log(`======================================================================================`);

const result = traders.reduce((acc, trs) => {
  // 연도별 거래자 거래 횟수 집계
  const key = `${trs.year}_${trs.trader.name}`;

  if(!acc[key]) {
  acc[key] = 1;
  } else {
    acc[key]++;
  }

  // 연도별 최대 거래 횟수 찾기
  const yearMaxkey = `max_${trs.year}`;
  if(!acc[yearMaxkey] || acc[key] > acc[yearMaxkey.count]) {
    acc[yearMaxkey] = {name : trs.trader.name, count : acc[key]}
  }

  return acc;
}, {});

console.log(result);

/*

8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

*/
  // 거래액 오름차로 정렬
  // 정렬은 원본을 손상시킴 - 안전하게 하려면 복사 후 정렬
  const sortedTraders = traders.slice().sort((a, b) => a.value - b.value);
  // console.log(sortedTraders);

  // 중간값 거래 정보 찾기

  // 배열의 요소 수가 홀수면 정확한 중간인덱스가 나오는데, 짝수면
  // 중앙 두 값의 평균을 중간값으로 한다.
  const middleIndex = Math.floor(sortedTraders.length / 2);

  let middleTradeInfo
  if(sortedTraders.length % 2 === 1) {
    // 배열의 요소 수가 홀수인 경우 정확한 중간 인덱스를 지정
    middleTradeInfo = sortedTraders[middleIndex];
  } else { // 짝수인 경우 
    middleTradeInfo = [sortedTraders[middleIndex - 1], sortedTraders[middleIndex]];
  }
  console.log(middleTradeInfo);
  

/*

9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

*/
 const trsCountByCity = traders.reduce((acc, trs) => {
  if (!acc[trs.trader.city]) {
    acc[trs.trader.city] =1;
  } else {
    acc[trs.trader.city]++;
  }
  return acc;
 }, {})
 console.log(trsCountByCity);
/*

10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

*/

const sortedTransactions = traders.slice().sort((a,b) => a.value - b.value);
console.log(sortedTransactions);
