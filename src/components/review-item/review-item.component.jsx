import { ReviewItemContainer, Buyer, ReviewText } from "./review-item.styles";

const ReviewItem = ({review}) => {
    const { name, model, description, imgUrl } = review;

    return (
        <ReviewItemContainer>
            <h4>{name}</h4>
            <Buyer>Verified Buyer</Buyer>
            <img src={imgUrl} alt={name} />
            <p>Model Purchased: {model}</p>
            <ReviewText>{description}</ReviewText>
        </ReviewItemContainer>
    );

}

export default ReviewItem