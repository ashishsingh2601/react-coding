import './App.css'
import Comments from './components/Comments'
import { commentsData } from './data/data.js'
import { useState } from 'react'
import useComment from './hooks/use-comment'


function App() {
  const [comments, setComments] = useState(commentsData);

  const { addComment, editComment, deleteComment } = useComment();

  const handleAddComment = (commentId, comment) => {
    const finalStructure = addComment(commentId, comments, comment);
    setComments({...comments, finalStructure});
  }

  const handleUpdateComment = (commentId, comment) => {
    const finalStructure = editComment(commentId, comments, comment);
    setComments({...comments, finalStructure});
  }

  const handleDeleteComment = (commmentId) => {
    const finalStructure = deleteComment(commmentId, comments);
    setComments({...finalStructure})
  }



  return (
   <main>
    <Comments 
      comments={comments}
      handleAddComment={handleAddComment}
      handleUpdateComment={handleUpdateComment}
      handleDeleteComment={handleDeleteComment}
    />
   </main>
  )
}

export default App
