import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import os from 'os';

const PRIMARY_LOG_PATH = join(process.cwd(), 'visitors.log');
const FALLBACK_LOG_PATH = join(os.tmpdir(), 'visitors.log');

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

    try {
      // Primary static directory for dev
      await writeFile(PRIMARY_LOG_PATH, line, { flag: 'a', encoding: 'utf8' });
    } catch (fsError: any) {
      // Vercel / Serverless throws EROFS on read-only system mounts
      if (fsError.code === 'EROFS' || (fsError.message && fsError.message.includes('Read-only'))) {
        await writeFile(FALLBACK_LOG_PATH, line, { flag: 'a', encoding: 'utf8' });
      } else {
        throw fsError;
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[Visitor Track] Error writing log:', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
