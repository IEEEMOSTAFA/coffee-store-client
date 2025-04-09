// components/ErrorPage.jsx
// import { useRouteError } from 'react-router-dom';

// export default function ErrorPage() {
//   const error = useRouteError();
//   return (
//     <div className="text-red-500 p-4">
//       <h1>Oops!</h1>
//       <p>Sorry, an unexpected error has occurred.</p>
//       <p><i>{error?.message || error?.statusText || 'Unknown error'}</i></p>
//     </div>
//   );
// }







import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-600 italic">
          {error.statusText || error.message}
        </p>
        <button 
          onClick={() => window.location = '/'}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}