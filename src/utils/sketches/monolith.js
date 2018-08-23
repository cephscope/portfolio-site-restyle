export default (props) => (p) => {
  let img;
  let theta = 0;
  p.preload = () => {
    img = p.loadImage("./images/me.jpg");
  }
  p.setup = () => {
    p.createCanvas(250, 575, p.WEBGL);
  };
  p.draw = () => {
    p.background("#1f2422");
    // p.rotateZ(p.frameCount * 0.01);
    p.push();
    p.rotateY(p.frameCount * 0.02);
    // p.rotateZ(p.frameCount * 0.01);
    // p.rotateX(p.frameCount * -0.01);
    p.texture(img);
    p.noStroke();
    p.box(200, 475, 0);
    // p.pop();
    // theta += 5;
  };
};