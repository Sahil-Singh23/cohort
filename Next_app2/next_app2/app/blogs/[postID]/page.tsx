

export default async function BlogPostPage({params}:{params:Promise<{postID:string}>}){
    const resolvedParams = await params;
    const postId = resolvedParams.postID;

    return(
        <div>
            Your on post {postId}
        </div>
    )
}