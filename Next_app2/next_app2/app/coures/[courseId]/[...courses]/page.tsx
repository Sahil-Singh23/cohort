

export default async function({params}:{params:Promise<{courseId:String,courses:String[]}>}){
    const resolvedParams = await params;
    const courseID = resolvedParams.courseId;
    const courses = resolvedParams.courses;

    return(
        <div>
            <div>{courseID}</div>
            <div>{JSON.stringify(courses)}</div>
        </div>
    )
}
