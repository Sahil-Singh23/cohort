import { S3Client,GetObjectCommand } from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"

const client = new S3Client({
    region: "ap-south-1",
    credentials:{
        accessKeyId:"",
        secretAccessKey:""
    }
})

async function getObjectURL(key){
    const command = new GetObjectCommand({
        Bucket: "",
        Key: key,
    })
    const url = await getSignedUrl(S3Client,command);
    return url;
}

async function init() {
    console.log('URL for graphql.jpeg',await getObjectURL('graphql.jpeg'));
}

init();

