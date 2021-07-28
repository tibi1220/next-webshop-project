import DefaultLayout from '../components/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
      <div className="text-6xl md:text-8xl lg:text-9xl font-mono text-center leading-tight p-12 bg-green-100">
        <div>
          <span>The Next</span>
        </div>
        <div>
          <span>Website</span>
        </div>
        <div>
          <span>You</span>
        </div>
        <div>
          <span>Order From</span>
        </div>
      </div>
    </DefaultLayout>
  );
}
