import { useRef, useState } from 'react';
import { Download, Pause, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/musicomedy-night-logo.png.asset.json';
import frame from '@/assets/nempo-feed-slide-31-gamelan-frame-transparent.png.asset.json';
import group from '@/assets/musicomedy-group.webp.asset.json';
import background from '@/assets/nempo-feed-slide-31-bg.jpg';

export function MusiComedyBumper() {
  const [playing, setPlaying] = useState(true);
  const [version, setVersion] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  return (
    <section className="mc-bumper-tool" aria-label="Video bumper acara MusiComedy Night">
      <div className="mc-bumper-controls">
        <Button variant="outline" size="icon" title={playing ? 'Jeda' : 'Putar'} aria-label={playing ? 'Jeda bumper' : 'Putar bumper'} onClick={() => setPlaying(!playing)}>
          {playing ? <Pause /> : <Play />}
        </Button>
        <Button variant="outline" size="icon" title="Putar ulang" aria-label="Putar ulang bumper" onClick={() => { setVersion(version + 1); setPlaying(true); }}><RotateCcw /></Button>
        <Button asChild><a href="/nempo-feed/musicomedy-bumper.mp4" download="MusiComedy-Night-Bumper-1080x1440.mp4"><Download />Download MP4</a></Button>
      </div>
      <div key={version} ref={stageRef} className={`mc-bumper-stage${playing ? '' : ' is-paused'}`} aria-label="Bumper MusiComedy Night 3:4">
        <img className="mc-bumper-backdrop" src={background} alt="" />
        <img className="mc-bumper-frame" src={frame.url} alt="Bingkai alat musik Sunda, 4 November 2026, Good Story Cafe" />
        <div className="mc-bumper-brand"><img src={logo.url} alt="MusiComedy Night" /></div>
        <div className="mc-bumper-intro"><span>NEMPO GARUT × KALA MUDA</span><strong>Musik.<br />Budaya.<br /><em>Tawa!</em></strong></div>
        <div className="mc-bumper-performers"><span>MALAM INI, KITA SERU-SERUAN!</span><img src={group.url} alt="Pengisi acara MusiComedy Night" /></div>
        <div className="mc-bumper-welcome"><span>GOOD STORY CAFE</span><strong>Selamat<br />menikmati<br /><em>acaranya!</em></strong><p>4 NOVEMBER 2026</p></div>
        <div className="mc-bumper-progress" aria-hidden="true" />
      </div>
    </section>
  );
}