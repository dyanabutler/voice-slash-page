import type { NextApiRequest, NextApiResponse } from 'next';

const apiKey = process.env.SENDGRID_API_KEY;
const listId = process.env.SENDGRID_LIST_ID;

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, firstName, lastName } = req.body;

  const data = {
    list_ids: [listId],
    contacts: [
      {
        email,
        first_name: firstName,
        last_name: lastName
      }
    ]
  };

  const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.status === 202) {
    return res.status(200).json({ message: 'Contact added successfully.' });
  } else {
    const errorData = await response.json();
    return res.status(response.status).json({ message: 'Failed to add contact', errorData });
  }
};

export default subscribe;
