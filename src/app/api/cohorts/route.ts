import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '../../lib/dbConnect';
import Cohort from '../../models/Cohort';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Handle POST requests
export async function POST(request: NextRequest) {
  await dbConnect();
  
  try {
    const data = await request.json();
    const { cohortName, description, programs, startDate, endDate, image } = data;
    
    // let imageUrl = '';
    // if (image) {
    //   const result = await cloudinary.uploader.upload(image, {
    //     upload_preset: 'cohort_images', // Your Cloudinary upload preset
    //     folder: 'public', // Adjust as needed
    //     transformation: [{ width: 240, height: 240, crop: 'limit' }],
    //   });
    //   imageUrl = result.secure_url;
    // }
    
    const newCohort = new Cohort({
      cohortName,
      description,
      programs,
      startDate,
      endDate,
      // image: imageUrl,
    });
    
    await newCohort.save();
    return NextResponse.json({ message: "Cohort created successfully", cohort: newCohort });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

// i handled get requests here
export async function GET() {
  await dbConnect();
  
  try {
    const cohorts = await Cohort.find({});
    return NextResponse.json(cohorts);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
