export default function LoginButton() {
    function oauthSignIn() {
        const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
        // Create <form> element to submit parameters to OAuth 2.0 endpoint.
        const form = document.createElement('form');
        form.setAttribute('method', 'GET');
        form.setAttribute('action', oauth2Endpoint);
  
        // Parameters to pass to OAuth 2.0 endpoint.
        const params: { [key: string]: string } = {
            'client_id': process.env.CLIENT_ID || "",
            'redirect_uri': "https://outfront.vercel.app/Dashboard",
            'response_type': 'token',
            'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
            'include_granted_scopes': 'true',
            // 'state': 'pass-through value'
        };
  
        // Add form parameters as hidden input values.
        for (const p in params) {
            if (params.hasOwnProperty(p)) {
                const input = document.createElement('input');
                input.setAttribute('type', 'hidden');
                input.setAttribute('name', p);
                input.setAttribute('value', params[p]);
                form.appendChild(input);
            }
        }
  
        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();
    }

    const handleOnClick = () => {
        oauthSignIn();
        console.log("wtf");
    };

    return (
        <button onClick={handleOnClick} className='border-2 border-gray-300 rounded-full w-16 h-16 p-2'>
            login
        </button>
    );
}
