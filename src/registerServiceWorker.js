// Register the service worker when app loads

export default function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(registration =>
      console.log('Registered:', registration)
    )
    .catch(error => 
      console.log('Registration failed: ', error)
    );
  }
}