import CircularCarousel from './components/CircularCarousel';
import { carousel } from './data_journey';

export default function App() {
  return (
    <div style={{ height: '100vh', background: '#ffffff' }}>
      <CircularCarousel
        items={carousel}
        cardWidth={260}
        aspectRatio={0.8}
        fadeColor="#ffffff"
      />
    </div>
  );
}