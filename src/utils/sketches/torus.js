export default (props) => (p) => {
  p.setup = () => {
    p.createCanvas(125, 125, p.WEBGL);
  };
  let r = 250;
  let g = 250;
  let b = 250;
  p.draw = () => {
    let x = p.mouseX - p.width / 2;
    let y = p.mouseY - p.height / 2;

    p.ambientLight("#1f2422");
    p.pointLight(255, 255, 255, x, y, 100);

    p.push();
    p.specularMaterial(r, g, b);
    p.noStroke();
    p.torus(40, 10, 32, 32);
    p.pop();
  };
  p.mousePressed = () => {
    r = p.random(255);
    g = p.random(255);
    b = p.random(255);
  }
};