import { ThreeDots } from 'react-loader-spinner';
import './Loader.css';

export default function Loader() {
  return (
    <div className="Spinner">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
}
