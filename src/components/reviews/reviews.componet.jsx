import ReviewItem from "../review-item/review-item.component";

import { ReviewsContainer, ReviewDiv } from './review.styles';

const reviews = [
    {
      id: 1,
      name: 'Joyce Byers',
      model: 'Daddi Yak',
      imgUrl: 'https://randomuser.me/api/portraits/lego/5.jpg',
      description: '“We have had such fun adventures in our Yak. It comes with us everywhere! It can sleep our whole family and fit in our garage. It is easy to haul around with our truck, even on trails. We should have gotten one a long time ago!”'
    },
    {
     id: 2,
     name: 'Murray Bauman',
     model: 'Babi Yak',
     imgUrl: 'https://randomuser.me/api/portraits/lego/2.jpg',
     description: '“I do a lot of solo trips. I was tired of sleeping in my Subaru or in a tent when I would go camping. I   sleep a lot more comfortably in the Yak now. I can even strap my kayak to the top of it!”'
    },
    {
     id: 3,
     name: 'Dustin Henderson',
     model: ' Mommi Yak',
     imgUrl: 'https://randomuser.me/api/portraits/lego/1.jpg',
     description: '“A great option for going camping with friends. I love the kitchen amenities. It is nice to wake up, step outside, and make a pot of coffee in the mountains. Definitely recommend.”'
    },
];

const Reviews = () => {
    return (
        <ReviewsContainer>
            <h3>Reviews</h3>
            <ReviewDiv>
            {reviews.map((review) => (
                <ReviewItem key={review.id} review={review}/>
            ))}
            </ReviewDiv>
        </ReviewsContainer>
    );
};

export default Reviews;