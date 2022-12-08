import { 
    ModelItemsContainer,
    ModelItemContainer,
    ModelItemDetails

} from "./model-item-styles";

const ModelItem = ({model}) => {
    const { name, sleeps, floor, width, height, length, clearance, weight } = model;

    const imgDetails = [
        'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        'https://images.unsplash.com/photo-1573869908170-64b53a60d8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1577075473292-5f62dfae5522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1518994510911-ef6fb582b53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80',
        'https://images.unsplash.com/photo-1645284692903-713e50f51449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1620188489543-326860bd4b45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://images.unsplash.com/photo-1605173983206-33cd0f25267e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    ]

    return (
        <ModelItemsContainer>
            <span>{name}</span>
                <ModelItemContainer>
                    <ModelItemDetails> 
                        <img src={imgDetails[0]} alt={sleeps} />
                        <div>
                        <p>Sleeps:<br></br> {sleeps}</p>
                        </div>
                    </ModelItemDetails>
                    <ModelItemDetails> 
                        <img src={imgDetails[1]} alt={floor} />
                        <div>
                        <p>Floor Size:<br></br> {floor}</p>
                        </div>
                    </ModelItemDetails>
                    <ModelItemDetails> 
                        <img src={imgDetails[2]} alt={width} />
                        <div>
                        <p>Width:<br></br> {width}</p>
                        </div>
                    </ModelItemDetails>
                    <ModelItemDetails> 
                        <img src={imgDetails[3]} alt={height} />
                        <div>
                        <p>Height:<br></br> {height}</p>
                        </div>
                    </ModelItemDetails>
                    <ModelItemDetails> 
                        <img src={imgDetails[4]} alt={length} />
                        <div>
                        <p>Length:<br></br> {length}</p>
                        </div>
                    </ModelItemDetails>
                    <ModelItemDetails> 
                        <img src={imgDetails[5]} alt={weight} />
                        <div>
                        <p>Weight:<br></br> {weight}</p>
                        </div>
                    </ModelItemDetails>
                    <ModelItemDetails> 
                        <img src={imgDetails[6]} alt={clearance} />
                        <div>
                        <p>Ground Clearance:<br></br> {clearance}</p>
                        </div>
                    </ModelItemDetails>
                </ModelItemContainer>
        </ModelItemsContainer>
    );
}

export default ModelItem;