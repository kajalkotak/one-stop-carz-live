import { NextResponse } from "next/server";

export async function GET() {
  const PLACE_ID = "0x395fc43252af5323:0x9daf711200df1d6c";

  const API_KEY = "AIzaSyDfzQTYqlDRiuLwPHC44K43TyUv-4-1ZbQ";

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`,
  );

  const data = await res.json();

  const fiveStarReviews =
    data.result?.reviews?.filter((review: any) => review.rating === 5) || [];

  return NextResponse.json(fiveStarReviews);
}
