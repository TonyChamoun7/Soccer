import React, { useState } from 'react';
import './ReviewsPage.css';

function ReviewsPage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'John Doe',
      content: 'The dribbling practice was amazing! I learned some great techniques and improved my skills significantly. Highly recommended!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      content: 'I attended the shooting practice session and it was fantastic. The trainers were knowledgeable and provided excellent guidance. I am thrilled with my progress!',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      content: 'I had a great experience with the passing practice. The drills were well-structured, and the trainers were supportive. I can see a noticeable improvement in my passing accuracy.',
    },
    {
      id: 4,
      name: 'Emily Wilson',
      content: 'The set piece practice was exceptional. I learned valuable techniques for free kicks and corners. The trainers were patient and provided individual feedback. I am excited to apply these skills in matches!',
    },
    {
      id: 5,
      name: 'David Brown',
      content: 'I attended the defending practice and it exceeded my expectations. The trainers emphasized proper positioning and taught effective tackling techniques. Highly satisfied with the session!',
    },
    {
      id: 6,
      name: 'Sarah Davis',
      content: 'The goalie practice was outstanding! The trainers provided valuable insights into positioning, reflexes, and distribution. I feel more confident and prepared as a goalkeeper now.',
    },
  ]);

  const [newReview, setNewReview] = useState({ name: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = reviews.length + 1;
    const updatedReviews = [...reviews, { ...newReview, id }];
    setReviews(updatedReviews);
    setNewReview({ name: '', content: '' });
  };

  return (
    <div className="reviews-container">
      <h1>Training Session Reviews</h1>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div className="review-item" key={review.id}>
            <h3 className="review-name">{review.name}</h3>
            <p className="review-content">{review.content}</p>
          </div>
        ))}
      </div>
      <form className="review-form" onSubmit={handleSubmit}>
        <h2>Write a Review</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Review:</label>
          <textarea
            id="content"
            name="content"
            value={newReview.content}
            onChange={handleInputChange}
            className="form-input"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default ReviewsPage;
