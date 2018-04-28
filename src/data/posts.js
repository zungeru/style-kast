// export default {
//   post1: [
//     {src: 'static/img/1080/slide1_A.jpeg'},
//     {src: 'static/img/1080/slide2_A.jpeg'},
//     {src: 'static/img/1080/slide5_A.jpeg'}
//   ],
//   post2: [
//     {src: 'static/img/1080/slide5_A.jpeg'},
//     {src: 'static/img/1080/slide1_A.jpeg'},
//     {src: 'static/img/1080/slide2_A.jpeg'}
//   ],
//   post3: [
//     {src: 'static/img/1080/slide4_A.jpeg'},
//     {src: 'static/img/1080/slide3_A.jpeg'},
//     {src: 'static/img/1080/slide5_A.jpeg'}
//   ],
//   post4: [
//     {src: 'static/img/1080/slide3_A.jpeg'},
//     {src: 'static/img/1080/slide2_A.jpeg'},
//     {src: 'static/img/1080/slide4_A.jpeg'}
//   ]
// }

// **Default object works this way...
// export default {
//   posts:[
//     {name: 'Mido', age: 37, pics: [{src: 'static/img/1080/slide3_A.jpeg'},{src: 'static/img/1080/slide2_A.jpeg'},{src: 'static/img/1080/slide5_A.jpeg'}]},
//     {name: 'RiRi', age: 26, pics: [{src: 'static/img/1080/slide1_A.jpeg'},{src: 'static/img/1080/slide5_A.jpeg'},{src: 'static/img/1080/slide3_A.jpeg'}]}
//   ]
// }

// Default list works this way....
export default [
  {
    id: 1,
    name: 'Mido',
    age: 38,
    pics: [
      {src: 'static/img/1080/slide5_A.jpeg'},
      {src: 'static/img/1080/slide2_A.jpeg'},
      {src: 'static/img/1080/slide3_A.jpeg'}
    ],
    piece: 'New Bomber Jacket',
    price: '598.00',
    place: 'Barneys New York',
    note: 'OK, this jacket just made me smile. #smiles #mynewgoto',
    liked: false,
    likedCount: 125
  },
  {
    id: 2,
    name: 'Q',
    age: 30,
    pics: [
      {src: 'static/img/1080/slide1_A.jpeg'},
      {src: 'static/img/1080/slide3_A.jpeg'},
      {src: 'static/img/1080/slide4_A.jpeg'}
    ],
    piece: 'Brand New Jordans',
    price: '320.00',
    place: 'Uptown Sneaker Collective',
    note: 'Stepping on in the freshest kicks, be the first to rock them #airj',
    liked: false,
    likedCount: 300
  },
  {
    id: 3,
    name: 'RiRi',
    age: 28,
    pics: [
      {src: 'static/img/1080/slide4_A.jpeg'},
      {src: 'static/img/1080/slide3_A.jpeg'},
      {src: 'static/img/1080/slide5_A.jpeg'}
    ],
    piece: 'The Classic Party Dress',
    price: '250.00',
    place: 'Banana Republic',
    note: 'This dress though!!!!, Everything!',
    liked: false,
    likedCount: 205
  }
]
