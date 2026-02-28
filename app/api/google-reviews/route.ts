import { NextResponse } from "next/server";

export async function GET() {
  try {
    const PLACE_ID = "ChIJI1OvUjLEXzkRbB3fABJxr50";

    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": API_KEY!,

          // ⭐ VERY IMPORTANT — include all review fields
         "X-Goog-FieldMask":
  "reviews.rating,reviews.text,reviews.authorAttribution,reviews.relativePublishTimeDescription"
        },
      },
    );

    const data = await res.json();

    console.log("GOOGLE RESPONSE:", JSON.stringify(data, null, 2));

    return NextResponse.json(data.reviews || []);
  } catch (error) {
    console.log("ERROR:", error);

    return NextResponse.json([]);
  }
}
