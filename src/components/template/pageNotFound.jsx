import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="max-w-7xl mx-0  h-[100dvh] justify-center items-center flex flex-col gap-4">
      <div className="text-5xl font-semibold ">404 Ops! Page Not Found</div>
      <div>
        <Link className="underline" to={'/'}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
