import React from "react";

function ToyCard({toy, setToys}) {

  const handleLike = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1,
      }),
    })
    .then((response) => response.json())
    .then((updatedToy) => {
      setToys((currentToys) => {
        return currentToys.map((currentToy) => {
          if (currentToy.id === updatedToy.id) {
            return updatedToy
          } else {
            return currentToy
          }
        })
      })
    })
    .catch((error) => {
      console.error("Error liking toy:", error)
    })
  }

  const handleDelete = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    .then(() => {
      const updatedToys = (currentToys) => {
        return currentToys.filter((currentToy) => currentToy.id !== toy.id)
      }

      setToys(updatedToys)
    })
    .catch((error) => {
      console.error("Error deleting toy:", error)
    })
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
