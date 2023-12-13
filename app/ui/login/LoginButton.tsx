export default function LoginButton(){
    /*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
function oauthSignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);
  
    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': 'YOUR_CLIENT_ID',
                  'redirect_uri': 'YOUR_REDIRECT_URI',
                  'response_type': 'token',
                  'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
                  'include_granted_scopes': 'true',
                  'state': 'pass-through value'};
  
    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }
    const handleOnClick = () => {
        oauthSignIn()
        console.log("wtf")
    }

    return  <button onClick={handleOnClick} className='border-2 border-gray-300 rounded-full w-16 h-16 p-2'>
    login
  </button>

}