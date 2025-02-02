const HotelData = [
  {
    id: '1',
    name: 'Boston Hotel',
    location: '553 Gislason Radial',
    price: '₹125',
    available: 'Book 2 nights get free Breakfast',
    rate: 4.5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 100,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '2',
    name: 'Brisbane Hotel',
    location: '623 Cathrine Port',
    price: '₹199',
    available: 'Book 2 nights get free Breakfast',
    rate: 4,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 99,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '3',
    name: 'Seattle Hotel',
    location: '303 Natasha Manors',
    price: '₹1,000',
    available: 'Book 2 nights get free Breakfast',
    rate: 4,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 89,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '4',
    name: 'Chengdu Hotel',
    location: '19 Jennie Route',
    price: '₹1,000',
    available: 'Only 4 rooms leaft',
    rate: 4.5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 299,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '5',
    name: 'Oyo 12345',
    location: 'Church Street Manali',
    price: '₹1000',
    available: 'Only 5 rooms leaft',
    rate: 5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 399,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '6',
    name: 'Oyo 45678',
    location: '4873 Clotilde Isle',
    price: '₹199',
    available: 'Only 10 rooms leaft',
    rate: 5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 400,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '7',
    name: 'Oyo 54321',
    location: '4873 Nevada St',
    price: '₹1999',
    available: 'Only 10 rooms leaft',
    rate: 5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 400,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '8',
    name: 'Treebo Hotel',
    location: '4873 Clotilde Isle',
    price: '₹1999',
    available: 'Only 10 rooms leaft',
    rate: 5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 400,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '9',
    name: 'Happy Hotel',
    location: '553 Gislason Radial',
    price: '₹125',
    available: 'Only 1 rooms leaft',
    rate: 4.5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 100,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '10',
    name: 'Lucky Hotel',
    location: '623 Cathrine Port',
    price: '₹199',
    available: 'Only 2 rooms leaft',
    rate: 4,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 99,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '11',
    name: 'JoJo Hotel',
    location: '303 Natasha Manors',
    price: '₹1,000',
    available: 'Only 3 rooms leaft',
    rate: 4,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 89,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '12',
    name: 'Sunflower Hotel',
    location: '19 Jennie Route',
    price: '₹1,000',
    available: 'Only 4 rooms leaft',
    rate: 4.5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 299,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '13',
    name: 'Indianapolis Hotel',
    location: '43 Gust Locks Apt. 725',
    price: '₹199',
    available: 'Only 5 rooms leaft',
    rate: 5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 399,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '14',
    name: 'San Jose Hotel',
    location: '4873 Clotilde Isle',
    price: '₹199',
    available: 'Only 10 rooms leaft',
    rate: 5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 400,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '15',
    name: 'Twin Peaks Hotel',
    location: '4873 Clotilde Isle',
    price: '₹199',
    available: 'Only 10 rooms leaft',
    rate: 5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 400,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
  {
    id: '16',
    name: 'Clarion Hotel',
    location: '4873 Clotilde Isle',
    price: '₹199',
    available: 'Only 10 rooms leaft',
    rate: 5,
    rateStatus: 'Very Good',
    rateCount: '85 of 100',
    numReviews: 400,
    services: [
      {id: '1', icon: 'wifi', name: 'Free Wifi'},
      {id: '2', icon: 'coffee', name: 'Free Coffee'},
      {id: '3', icon: 'bath', name: 'Free Bath'},
      {id: '4', icon: 'car', name: 'Free Car'},
      {id: '5', icon: 'paw', name: 'Free Paw'},
      {id: '6', icon: 'futbol', name: 'Free Futbol'},
    ],
  },
];

export {HotelData};
