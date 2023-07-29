/**
 * Задание 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

```
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
            "1.jpg",
            "2.jpg",
            ],
        },
        {
            id: 5,
            price: 499,
            photos: [],
            },
        {
            id: 10,
            price: 26,
            photos: [
            "3.jpg",
            ],
        },
        {
            id: 8,
            price: 78,
        },
    ];

    []()
    []()

 */

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

// 1.
const newProducts = [];
for (let i = 0; i < products.length; i++){
    for (let key  in products[i]){
        if (key === 'photos' && products[i][key].length !== 0){
            newProducts.push(products[i]);
        }
    }
}
console.log(newProducts);

const nProducts = products.filter(item => item.photos && item['photos'].length !== 0);

console.log(nProducts);


// 2.

const sortProducts = products.sort((item1, item2) => item1.price - item2.price);

console.log(sortProducts);