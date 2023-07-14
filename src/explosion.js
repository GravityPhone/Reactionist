let particles = [];

export const explode = (ctx, x, y) => {
  for(let j = 0; j < 100; j++) {
    particles.push({
      x: x,
      y: y,
      speed: Math.random() * 5,
      angle: Math.random() * 2 * Math.PI,
      life: 1
    });
  }
};

export const animateParticles = (ctx) => {
  for(let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    particle.x += particle.speed * Math.cos(particle.angle);
    particle.y += particle.speed * Math.sin(particle.angle);
    particle.life -= 0.01;
    if(particle.life <= 0) {
      particles.splice(i, 1);
      i--;
    } else {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
};
