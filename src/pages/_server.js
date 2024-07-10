import { parse, serialize } from 'cookie';

export async function get({ request }) {
  // Parse cookies from the request
  const cookies = parse(request.headers.get('cookie') || '');
  
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
