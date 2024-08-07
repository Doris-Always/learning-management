import { NextResponse,NextRequest } from "next/server";
import dbConnect from "../lib/dbConnect";
import Cohort from "../models/Cohort";
import {v2 as cloudinary} from "cloudinary"
// export async function POST(request:Request){
//     const data = await request.json()
//     return NextResponse.json({
//         hello:"world",
//     })
// }
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
export async function POST(request: Request) {
    await dbConnect();
    try {
        const data = await request.json();
        const { cohortName, description, programs, startDate, endDate, image} = data;
        let imageUrl = '';
        if (image) {
          const result = await cloudinary.uploader.upload(image, {
            upload_preset: 'cohort_images', // Your Cloudinary upload preset
            folder: 'public',
            // folder: 'cohorts',
            transformation: [{ width: 240, height: 240, crop: 'limit' }],
          });
          imageUrl = result.secure_url;
        }
    
        const newCohort = new Cohort({
            cohortName,
            description,
            programs,
            startDate,
            endDate,
            image: imageUrl,
          });
      
        // const newCohort = new Cohort(data);
        await newCohort.save();
        return NextResponse.json({ message: "Cohort created successfully", cohort: newCohort });
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }
}

export async function GET(){
    await dbConnect();
    try{
        const cohorts =await Cohort.find({})
       return NextResponse.json(cohorts);
    }catch(err: any){
        return NextResponse.json({error: err.message});
    }
    
}

