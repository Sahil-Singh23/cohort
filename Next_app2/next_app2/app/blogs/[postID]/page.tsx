

export default async function BlogPostPage({params}:{params:Promise<{postID:string}>}){
    const resolvedParams = await params;
    const postId = resolvedParams.postID;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();

    return(
        <div>
            Your on post {postId}
            <h1>Post title: {data.title}</h1>
            <h1>Post data: {data.body}</h1>
        </div>
    )
}