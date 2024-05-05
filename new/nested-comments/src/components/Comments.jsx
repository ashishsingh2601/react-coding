import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Comments = ({
  comments,
  handleAddComment,
  handleUpdateComment,
  handleDeleteComment,
}) => {
  const inputRef = useRef(null);

  const [comment, setComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const onAddComment = (type) => {
    if (isEditing && type === "Save") {
      handleUpdateComment(comments.id, inputRef?.current?.innerText);
      setIsEditing(false);
    } else {
      if (comment !== "") {
        handleAddComment(comments.id, comment);
        setComment("");
        setShowInput(false);    
      }
    }
  };

  useEffect(() => {
    if(isEditing) inputRef.current.focus();
  }, [isEditing])

  return (
    <main>
      {comments.id === 1 ? (
        <div>
          <input
            type="text"
            value={comment}
            placeholder="Type here..."
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={onAddComment} role="button">
            Add Comment
          </button>
        </div>
      ) : (
        <>
          <span
            contentEditable={isEditing}
            suppressContentEditableWarning={isEditing}
            ref={inputRef}
          >
            {comments.name}
          </span>
          {isEditing ? (
            <div>
              <button onClick={() => onAddComment("Save")}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <button onClick={() => setShowInput(true)}>Reply</button>
              <button onClick={() => setIsEditing(true)}>Update</button>
              <button onClick={() => handleDeleteComment(comments.id)}>
                Delete
              </button>
            </div>
          )}
        </>
      )}
      <div style={{ paddingLeft: "1.5rem" }}>
        {showInput && (
          <div>
            <input
              type="text"
              placeholder="Type here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={() => onAddComment()}>Post</button>
            <button onClick={() => setShowInput(false)}>Cancel</button>
          </div>
        )}
        {comments.items?.map((commentSubTree) => {
          return (
            <Comments
              comments={commentSubTree}
              key={new Date().getDate()}
              handleAddComment={handleAddComment}
              handleUpdateComment={handleUpdateComment}
              handleDeleteComment={handleDeleteComment}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Comments;
