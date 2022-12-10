import Link from 'next/link';
const Custom404 = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-background-color h-screen gap-4'>
      <h1 className='text-dark-color text-9xl font-bold'>404</h1>
      <p className='text-secondary-color font-semibold'>
        There&apos;s nothing here.
      </p>
      <p className='text-accent-color font-semibold'>
        <Link href='/'> Go Back</Link>
      </p>
    </div>
  );
};
export default Custom404;
