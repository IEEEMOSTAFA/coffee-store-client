// components/ErrorPage.jsx
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="text-red-500 p-4">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p><i>{error?.message || error?.statusText || 'Unknown error'}</i></p>
    </div>
  );
}