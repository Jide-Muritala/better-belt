import { parse, serialize } from 'cookie';
console.log('Cookie module loaded:', parse, serialize);

export async function get({ request }) {
  console.log('Request headers:', request.headers);
  // Parse cookies from the request
  const cookies = parse(request.headers.get('cookie') || '');
  console.log('Parsed cookies:', cookies);
  
  // Example: Check for a specific cookie
  if (!cookies.visited) {
    // Set a new cookie in the response
    return {
      headers: {
        'Set-Cookie': serialize('visited', '1', { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 * 7 }) // 1 week expiry
      },
      props: {
        cookies
      }
    };
  }

  return {
    props: {
      cookies
    }
  };
}
