import React, { useEffect } from 'react';
import { explode, animateParticles } from './explosion';

function Circle() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let t = 0;
    let circles = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if(t % 240 === 0) {
        for(let i = 0; i < canvas.height; i += 20) {
          let x = t;
          let y = i + 50 * Math.sin(t);
          ctx.beginPath();
          ctx.arc(x, y, 10, 0, 2 * Math.PI);
          ctx.fill();
          circles.push({x, y, radius: 10});
        }
      }
      t += 1;
      animateParticles(ctx);
      requestAnimationFrame(animate);
    };

    const explodeCircle = (e) => {
      let rect = canvas.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      for(let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        let dx = circle.x - x;
        let dy = circle.y - y;
        if(Math.sqrt(dx * dx + dy * dy) < circle.radius) {
          circles.splice(i, 1);
          explode(ctx, circle.x, circle.y);
          break;
        }
      }
    };

    canvas.addEventListener('click', explodeCircle);

    animate();

    return () => {
      canvas.removeEventListener('click', explodeCircle);
    };
  }, []);

  return (
    <canvas id="canvas" width="800" height="600"></canvas>
  );
}

export default Circle;
