import { NextRequest, NextResponse } from 'next/server';

function handler(req: NextRequest) {
  const fileContent = '';

  return NextResponse.json({ data: fileContent });
}

export { handler as GET };
