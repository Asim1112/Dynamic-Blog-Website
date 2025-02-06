import React , { useState } from 'react';
import { Card , CardContent} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
};

interface CommentSectionProps {
  postId: string
};



const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comment, setComment] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null> (null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentOBJ: Comment = {
        id: new Date().toString(),
        author: authorName,
        text: newComment
      };
      setComment([...comment, newCommentOBJ]);
      setNewComment("");
      setAuthorName("");

    }
  };
  const handleEditComment = (commentID: string) => {
    const commentToEdit = comment.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };
  
  const handleSaveEditedComment = () => {
    if(newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comment.map((comment) => 
      comment.id === editingCommentId
    ? {...comment, text: newComment, author: authorName}
  : comment
);
  setComment(updatedComments);
  setNewComment(" ");
  setAuthorName(" ");
  setEditingCommentId(null);

    }
  }


  
  
  
  return (
    <div className='mt-8'>
      <h2 className='text-2xl font-semibold'>Comments</h2>
      <div className='mt-4 space-y-4'>
        {comment.length > 0 ? (
          comment.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className='font-semibold'>{comment.author}</div>
                <p>{comment.text}</p>
                <Button onClick={() => handleEditComment(comment.id)} className="mt-2 text-orange-500">
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className='text-gray-500'>No comment yet</p>
        )
      }
      </div>
        <div className='mt-6'>
        
        <Input
        type='text'
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholder='Your Name'
        className='w-full mb-2'/>

        <Input
        type='text'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder='Add you Comment'
        className='w-full mb-2'/>

        <Button onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
        className='mt-4'>
          {editingCommentId ? "Save" : "Submit"}

        </Button>


        </div>
    </div>


  )
}

export default CommentSection
