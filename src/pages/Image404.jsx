import Asset from "../assets/Asset 404.jpg";

function Image404() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto grid place-items-center h-screen">
        <div className="text-center">
          <img src={Asset} alt="Your Image" className="block mx-auto" />
          <h2 className="pt-3 text-3xl">Looks like you took a wrong turn</h2>
          <p className="pt-3 text-sm">
            The page you`&apos;`re looking for might be under construction or
            has moved elsewhere. Please check the URL or return to the homepage.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Image404;
