const useComment = () => {
    const addComment = (id, comments, comment) => {
        if(comments.id === id){
            comments.items.push({
                id: new Date().getTime(),
                name: comment,
                items: []
            })
           return comments; 
        }

        let latestNode = [];
        latestNode = comments.items?.map((tree) => {
            return addComment(id, tree, comment);
        })

        return {...comments, latestNode};

    }

    const editComment = (id, comments, comment) => {
        if(comments.id === id){
            comments.name = comment;
            return comments;
        }

        comment.items?.map((tree) => {
            return editComment(id, tree, comment);
        })

        return { ...comments };

    }

    const deleteComment = (comments, id) => {
        for(let i = 0; i < comments.items?.length; i++){
            const currentItem = comments.items[i];
            if(currentItem.id === id){
                comments?.items?.splice(i, 1);
                return comments;
            }else{
                deleteComment(currentItem, id);
            }
            return {...comments};
        }
    }

    return {
        addComment,
        editComment,
        deleteComment
    }
}

export default useComment;