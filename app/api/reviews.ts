import { NextApiRequest, NextApiResponse } from 'next';
import { google} from 'googleapis';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Set up OAuth2 client with your credentials
      const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID, // Your client ID
        process.env.CLIENT_SECRET, // Your client secret
        process.env.REDIRECT_URI // Your redirect URI
      );

      // Set the access token
      oauth2Client.setCredentials({
        access_token: process.env.ACCESS_TOKEN, // Your access token
      });

    
      //@ts-ignore
      const myBusiness = google.mybusiness({
        version: 'v4',
        auth: oauth2Client,
      });

      // Replace `accountName` with your actual account name
      const accountName = 'accounts/your-account-id';

      // Make a request to list all reviews
      const response = await myBusiness.accounts.locations.reviews.list({
        parent: `${accountName}/locations/your-location-id`,
      });

      // Send back the reviews data
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
