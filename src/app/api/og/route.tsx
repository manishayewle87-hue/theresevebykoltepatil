/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'The Reserve by Kolte Patil';
    const subtitle = searchParams.get('subtitle') || 'Ultra Luxury Riverside Residences in Pune';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#09090b', // Onyx Black
            backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #09090b 100%)',
            border: '8px solid #d4af37',
          }}
        >
          {/* Top Branding */}
          <div
            style={{
              position: 'absolute',
              top: 80,
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '4px',
              fontSize: 24,
              color: '#d4af37',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            Kolte Patil Developers
          </div>

          {/* Main Content Area */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 120px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: 80,
                color: '#ffffff',
                fontFamily: 'serif',
                lineHeight: 1.1,
                marginBottom: 30,
                textTransform: 'uppercase',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 32,
                color: '#a1a1aa',
                fontFamily: 'sans-serif',
                fontWeight: 300,
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Bottom CTA */}
          <div
            style={{
              position: 'absolute',
              bottom: 80,
              display: 'flex',
              padding: '20px 60px',
              backgroundColor: '#d4af37',
              color: '#09090b',
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Read The Full Guide
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
