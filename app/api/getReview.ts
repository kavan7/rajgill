// /pages/api/getReviews.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Review = {
  reviewer: {
    displayName: string;
    profilePhotoUrl: string;
    isAnonymous: boolean;
  };
  starRating: string;
  comment: string;
  createTime: string;
};

type ReviewsResponse = {
  reviews: Review[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { accountId, locationId } = req.query;

  if (!accountId || !locationId) {
    res.status(400).json({ error: 'Missing accountId or locationId' });
    return;
  }

  const accessToken = process.env.GOOGLE_MY_BUSINESS_ACCESS_TOKEN; // Store your access token in an environment variable

  try {
    const response = await axios.get<ReviewsResponse>(
      `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    //@ts-ignore
    console.error('Error fetching reviews:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error fetching reviews' });
  }
}
