import Button from './Button';
function Home() {
  return (
    <div className="mb  my-10 text-center sm:my-16">
      <h1 className="mb-10 text-center text-xl font-extrabold text-gray-900 md:text-3xl">
        WELCOME TO SHOP PIZZA🍕👜
      </h1>
      <Button to="/menu" type="primary">
        !.. start Ordering
      </Button>
    </div>
  );
}

export default Home;
