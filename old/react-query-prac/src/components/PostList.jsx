import React from "react";
import { addPost, fetchPosts, fetchTags } from "../api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const PostList = () => {
  const {
    data: postData,
    isLoading,
    isError,
    error,
    status,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const queryClient = useQueryClient();

  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: Infinity,
  });

  const {
    mutate,
    isError: isErrorWhilePosting,
    error: postError,
    isPending,
    reset,
  } = useMutation({
    mutationFn: addPost,
    onMutate: () => {
        return 
    },
    onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries({
            queryKey: ["posts"],
            exact: true,
        })
    },
    // onError: (error, variables, context) => {

    // },
    // onSettled: (data, error, variables, context) => {

    // }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");

    console.log("form", Array.from(formData.keys()));
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );

    // input.onblur = function () {
            if(!title || !tags){
            
            // if(input.name = "title"){
            //     input.classList.add("error");
            //     input.focus();
            // }  
            return;
            
        }
        // else{
        //     this.classList.remove("error");
        // }
    // }

    console.log(title, tags);
    mutate({id: postData.length + 1, title, tags});
        e.target.reset();
  };

  return (
    <div className="container">
      {(isLoading || isPending) && <p>Loading...</p>}
      {error && <p>{error?.message}</p>}
        {isErrorWhilePosting && <p onClick={() => reset()}>Unable to post</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Post..."
          className="post__input"
          name="title"
        />
        <div className="tags">
          {tagsData?.map((tagElement) => {
            return (
              <div key={tagElement}>
                <input type="checkbox" name={tagElement} id={tagElement} />
                <label htmlFor={tagElement}>{tagElement}</label>
              </div>
            );
          })}
        </div>
        <button className="post__button">Post</button>
      </form>

      {postData?.map((post) => {
        return (
          <div key={post.id} className="post">
            <div>{post.title}</div>
            {post?.tags?.map((tag) => {
              return <span key={tag}>{tag}</span>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
