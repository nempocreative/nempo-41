import { useState } from 'react';
import { Download, Pause, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/musicomedy-night-logo.png.asset.json';
import frame from '@/assets/nempo-feed-slide-31-gamelan-frame-transparent.png.asset.json';
import background from '@/assets/nempo-feed-slide-31-bg.jpg';
import wayang from '@/assets/musicomedy-bumper-wayang.png';
import video from '@/assets/musicomedy-bumper.mp4.asset.json';
import nempoLogo from '@/assets/nempo-bumper-logo.png.asset.json';

export function MusiComedyBumper() {
  const [playing, setPlaying] = useState(true);
  const [version, setVersion] = useState(0);
  return (
    <section className="mc-bumper-tool" aria-label="Video bumper acara MusiComedy Night">
      <div className="mc-bumper-controls">
        <Button variant="outline" size="icon" title={playing ? 'Jeda' : 'Putar'} aria-label={playing ? 'Jeda bumper' : 'Putar bumper'} onClick={() => setPlaying(!playing)}>
          {playing ? <Pause /> : <Play />}
        </Button>
        <Button variant="outline" size="icon" title="Putar ulang" aria-label="Putar ulang bumper" onClick={() => { setVersion(version + 1); setPlaying(true); }}><RotateCcw /></Button>
        <Button asChild><a href={video.url} download="MusiComedy-Night-Bumper-1080x1440.mp4"><Download />Download MP4</a></Button>
      </div>
      <div key={version} className={`mc-bumper-stage${playing ? '' : ' is-paused'}`} aria-label="Bumper MusiComedy Night 3:4">
        <img className="mc-bumper-backdrop" src={background} alt="" />
        <img className="mc-bumper-frame" src={frame.url} alt="Bingkai alat musik Sunda, 4 November 2026, Good Story Cafe" />
        <div className="mc-bumper-curtain mc-bumper-curtain-left" aria-hidden="true" />
        <div className="mc-bumper-curtain mc-bumper-curtain-right" aria-hidden="true" />
        <div className="mc-bumper-nempo"><img src={nempoLogo.url} alt="NEMPO" /></div>
        <div className="mc-bumper-puppet mc-bumper-puppet-left"><img src={wayang} width={1024} height={1536} alt="Wayang membuka panggung dari kiri" /></div>
        <div className="mc-bumper-puppet mc-bumper-puppet-right"><img src={wayang} width={1024} height={1536} alt="Wayang membuka panggung dari kanan" /></div>
        <div className="mc-bumper-title-reveal"><span>NEMPO GARUT × KALA MUDA</span><img src={logo.url} alt="MusiComedy Night" /><strong>SELAMAT MENIKMATI ACARA</strong></div>
        <div className="mc-bumper-progress" aria-hidden="true" />
      </div>
    </section>
  );
}