import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const LOG_PATH = join(process.cwd(), 'visitors.log');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
    }

    const record = {
      ip: body.ip || '',
      timestamp: body.timestamp || new Date().toISOString(),
      page: body.page || '',
    };

    const line = JSON.stringify(record) + '\n';

    await writeFile(LOG_PATH, line, { flag: 'a', encoding: 'utf8' });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[Visitor Track] Error writing log:', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
