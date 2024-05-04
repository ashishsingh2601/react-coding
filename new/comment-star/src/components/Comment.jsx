import React, {useState} from 'react'
import DisplayComments from './DisplayComments';


const Comment = () => {
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("");
    const [formData, setFormData] = useState([]);

    const handleCommentChange = (e) => {
        const { value } = e.target
        setComment(value);
    }

    const handleRatingChange = (e) => {
        setRating(() => parseInt(e.target.value, 10));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const latestComment = {comment, rating};

        setFormData([...formData, latestComment]);

        setComment("");
        setRating(1);
    }



  return (
    <main>
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment"></label>
            <input type="text" placeholder='enter comment' value={comment} name="comment" onChange={handleCommentChange} />

            <select onChange={handleRatingChange} value={rating}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            <button type="submit" role="button">Comment</button>
         </form>
         <DisplayComments formData={formData} />
    </main>
  )
}

export default Comment