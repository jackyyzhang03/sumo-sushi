import './src/styles/styles.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. '
      + 'Reload to display the latest version?',
  );
  if (answer === true) {
    window.location.reload();
  }
};
