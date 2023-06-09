export default function gradient(ctx) {
    ctx.save();
    ctx.strokeStyle='rgba(0,0,0,0)';
    ctx.lineCap='butt';
    ctx.lineJoin='miter';
    ctx.miterLimit=10.0;
    ctx.font='10px sans-serif';
    ctx.save();
    var radialGradient_1389130830351 = ctx.createRadialGradient(6E1,6E1,0.0,6E1,6E1,5E1);
    radialGradient_1389130830351.addColorStop(0E0,'red');
    radialGradient_1389130830351.addColorStop(1E0,'blue');
    ctx.fillStyle=radialGradient_1389130830351;
    ctx.font='10px sans-serif';
    ctx.beginPath();
    ctx.moveTo(2.5E1,1E1);
    ctx.lineTo(9.5E1,1E1);
    ctx.quadraticCurveTo(1.1E2,1E1,1.1E2,2.5E1);
    ctx.lineTo(1.1E2,9.5E1);
    ctx.quadraticCurveTo(1.1E2,1.1E2,9.5E1,1.1E2);
    ctx.lineTo(2.5E1,1.1E2);
    ctx.quadraticCurveTo(1E1,1.1E2,1E1,9.5E1);
    ctx.lineTo(1E1,2.5E1);
    ctx.quadraticCurveTo(1E1,1E1,2.5E1,1E1);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();
    var radialGradient_1389130830351 = ctx.createRadialGradient(3.5E1,1.45E2,0.0,3.5E1,1.45E2,2.5E1);
    radialGradient_1389130830351.addColorStop(0E0,'red');
    radialGradient_1389130830351.addColorStop(1E0,'blue');
    ctx.fillStyle=radialGradient_1389130830351;
    ctx.font='10px sans-serif';
    ctx.beginPath();
    ctx.moveTo(2.5E1,1.2E2);
    ctx.lineTo(9.5E1,1.2E2);
    ctx.quadraticCurveTo(1.1E2,1.2E2,1.1E2,1.35E2);
    ctx.lineTo(1.1E2,2.05E2);
    ctx.quadraticCurveTo(1.1E2,2.2E2,9.5E1,2.2E2);
    ctx.lineTo(2.5E1,2.2E2);
    ctx.quadraticCurveTo(1E1,2.2E2,1E1,2.05E2);
    ctx.lineTo(1E1,1.35E2);
    ctx.quadraticCurveTo(1E1,1.2E2,2.5E1,1.2E2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
};
