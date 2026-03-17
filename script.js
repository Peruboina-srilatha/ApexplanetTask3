body {
  font-family: Arial;
  text-align: center;
  background: #f4f4f4;
  margin: 0;
}

h1 {
  background: teal;
  color: white;
  padding: 15px;
}

/* Common containers */
.carousel, .quiz-container, .api-container {
  background: white;
  padding: 20px;
  margin: 20px auto;
  width: 60%;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
}

/* Carousel */
.carousel img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
}

/* Buttons */
button {
  padding: 10px 20px;
  margin: 5px;
  background: teal;
  color: white;
  border: none;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 600px) {
  .carousel, .quiz-container, .api-container {
    width: 90%;
  }

  .carousel img {
    height: 200px;
  }
}

@media (max-width: 900px) {
  .carousel, .quiz-container, .api-container {
    width: 75%;
  }
}
