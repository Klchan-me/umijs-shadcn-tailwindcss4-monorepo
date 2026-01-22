import yayJpg from '../assets/yay.jpg';
import { Button } from '@workspace/ui/components/button';

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <div className="bg-red-500 text-white p-4">
        tailwind test
      </div>

      <p>
        <img src={yayJpg} width="388" />
        <Button>Click me</Button>
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
