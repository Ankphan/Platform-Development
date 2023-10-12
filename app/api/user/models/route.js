// app/api/get-uploaded-model.js

import clientPromise from '@/lib/mongoClient';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {
	const session = await getServerSession(req);
	if (!session) {
		return res.status(401).json({ message: 'Not authenticated' });
	}

	const client = await clientPromise;
	const db = client.db();
	const fileCollection = db.collection('files');

	const fileData = await fileCollection.findOne(
		{ belongsTo: session.user.email },
		{ sort: { createdAt: -1 } }
	);

	if (!fileData) {
		return res.status(404).json({ message: 'No uploaded model found' });
	}

	return res.status(200).json({ modelUrl: fileData.url });
}